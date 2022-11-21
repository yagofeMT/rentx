import { database } from "@databases/index";
import api from "@services/api";
import React, { createContext, useState, useContext, ReactNode, useEffect } from "react";
import {User as UserModel} from '@databases/model/User';

interface User {
  id: string;
  user_id: string;
  email: string;
  name: string;
  driver_license: string;
  avatar: string;
  token: string;

}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: User;
  signIn: (credentials: SignInCredentials) => Promise<void>;
  signOut: () => Promise<void>;
  updateUser: (user: User) => Promise<void>;

}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [data, setData] = useState<User>({} as User);

  async function signIn({ email, password }: SignInCredentials) {
    try {
      const response = await api.post("/sessions", { email, password });

      const { token, user } = response.data;
      api.defaults.headers.authorization = `Bearer ${data.token}`;

      const userColletions = database.get<UserModel>("users");

      await database.write(async () => {
        await userColletions.create((newUser) => {
            newUser.user_id = user.id,
            newUser.name = user.name,
            newUser.email = user.email,
            newUser.driver_license = user.driver_license,
            newUser.avatar = user.avatar,
            newUser.token = token
        });
      });

      console.log(user);
      
      setData({ ...user, token });
    } catch(error) {
      throw new Error();
    }
  }

  async function signOut(){
    try {
      const userCollection = database.get<UserModel>('users');

      await database.write(async () => {
        const userSelected = await userCollection.find(data.id);
        await userSelected.destroyPermanently();
      })

      setData({} as User)

    } catch (error) {
      throw new Error();
    }
  }

  async function updateUser(user: User)
  {
    try {
      const userCollection = database.get<UserModel>('users');

      await database.write(async () => {
        const userSelected = await userCollection.find(user.id);
        
        await userSelected.update((userData) => {
          userData.name = user.name,
          userData.driver_license = user.driver_license,
          userData.avatar = user.avatar
        })

        setData(user);
      })


    } catch (error) {
      throw new Error()
    }
  }
  useEffect(() => {
    async function loadUserData() {
        const userColletions = database.get<UserModel>('users');
        const response = await userColletions.query().fetch();

        if(response.length > 0)
        {
            const userData = response[0]._raw as unknown as User;
            api.defaults.headers.authorization = `Bearer ${userData.token}`;
            setData(userData);
        }
    }

    loadUserData()
  })

  return (
    <AuthContext.Provider value={{ user: data, signIn, signOut, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };

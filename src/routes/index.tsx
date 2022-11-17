import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { AppTabRoutes } from './app.tabs.routes'
import { useAuth } from '@hooks/auth'
import { AuthRoutes } from './auth.routes'

export function Routes() {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      {user.id ? <AppTabRoutes/> : <AuthRoutes/>}
    </NavigationContainer>
  )
}

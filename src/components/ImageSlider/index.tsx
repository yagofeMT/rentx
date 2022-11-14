import BackButton from '@components/BackButton';
import React, { useRef, useState } from 'react'
import { ViewToken } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Container, ImageIndexes, ImageIndex, CarImageWrapper, CarImage, Header } from './styles'

interface Props {
    photos: {
        photo: string;
        id: string;
    }[];
    BackFunction: () => void;
}

interface ChangeImageProps {
    viewableItems : ViewToken[];
    changed: ViewToken[];
}

export function ImageSlider({ photos, BackFunction }: Props) {

    const [imageIndex, setImageIndex] = useState(0);

    const indexChanged = useRef((info : ChangeImageProps) => {
        setImageIndex(info.viewableItems[0].index!)
    })

    return (
        <Container>
            <Header>
                <BackButton themeIcon='black' onPress={() => BackFunction()} />
                <ImageIndexes>
                    {photos.map((item, index) => (
                        <ImageIndex key={String(item.id)} active={index === imageIndex} />
                    )
                    )}
                </ImageIndexes>
            </Header>
            <FlatList
                data={photos}
                keyExtractor={key => key.id}
                renderItem={({ item }) => (
                    <CarImageWrapper>
                        <CarImage source={{ uri: item.photo }} reziseMode='contain' />
                    </CarImageWrapper>
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                onViewableItemsChanged={indexChanged.current}
            />

        </Container>
    )
}

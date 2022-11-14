import React from 'react'
import { SvgProps } from 'react-native-svg';
import { AccessoryCard, AccessoryName } from './styles';

interface Props {
    name : string;
    icon : React.FC<SvgProps>;
}

export function Accessory({name, icon : Icon} : Props) {
    return (
        <AccessoryCard>
            <Icon width={32} height={32} color='black'/>
            <AccessoryName>{name}</AccessoryName>
        </AccessoryCard>
    )
}
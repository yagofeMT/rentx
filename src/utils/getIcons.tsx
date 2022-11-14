import React from 'react';
import SpeedSVG from '@assets/Speed.svg';
import PowerSVG from '@assets/Força.svg';
import PeopleSVG from '@assets/Pessoas.svg';
import UpSVG from '@assets/Up.svg';
import CambioSVG from '@assets/Câmbio.svg';
import GasSVG from '@assets/Gasolina.svg';
import EletricSVG from '@assets/Energia.svg';
import {Text} from 'react-native'



export function getIcons(type: string) {
    if (type === 'speed') {
        return SpeedSVG
    }
    if (type === 'acceleration') {
        return UpSVG
    }
    if (type === 'turning_diameter') {
        return PowerSVG
    }
    if (type === 'gasoline_motor') {
        return GasSVG
    }
    if (type === 'exchange') {
        return CambioSVG
    }
    if (type === 'seats') {
        return PeopleSVG
    }
    else {
        return EletricSVG
    }
}


export function GetIconHome(type: string) {
    if (type === 'gasoline_motor') {
        return <GasSVG width={24} height={24} />
    }
    if (type === 'electric' || type === 'electric_motor') {
        return <EletricSVG width={24} height={24} />
    } else if (type === 'hybrid_motor') {
        return <Text>Hybrid</Text>
    }
}
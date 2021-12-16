import React from 'react'
import { View } from 'react-native'

interface ISpacerProps {
    mt? : number;
    mr? : number;
    mb? : number;
    ml? : number;
}

const Spacer = ({mt,mr,mb,ml} : ISpacerProps) => {
    return (
        <View style={{marginTop: mt, marginRight: mr, marginBottom: mb, marginLeft: ml}}>
            
        </View>
    )
}

export default Spacer
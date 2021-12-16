import React from 'react'
import { StyleSheet, View } from 'react-native'

//User defined Imports
import { COLORS } from '../constants'
import Text from './text/Text'

export default function Astrick() {
    return (
        <Text containerStyle={{color: "#f00000"}}>*</Text>
    )
}

const styles = StyleSheet.create({})

import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import {NavigationContainer} from '@react-navigation/native';

export default function MainNavigator() {
    return (
        <NavigationContainer>
          <SafeAreaView>
            <Text>Distributor App</Text>
          </SafeAreaView>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({})

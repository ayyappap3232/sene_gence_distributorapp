import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import {NavigationContainer} from '@react-navigation/native';

const MainNavigator = () => {
    return (
        <NavigationContainer>
          <SafeAreaView>
            <Text>Distributor App Home Page</Text>
          </SafeAreaView>
        </NavigationContainer>
    )
}

export default MainNavigator
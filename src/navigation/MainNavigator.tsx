import React from 'react'
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import Spacer from '../components/spacer';
import PressableButton from '../components/button/PressableButton';

const MainNavigator = () => {
    return (
        <NavigationContainer>
          <SafeAreaView>
            <Text>Distributor App Home Page</Text>
            <PressableButton onPress={() => {}}>
              <Text style={{color: '#fff'}}>Button</Text>
            </PressableButton>
            <Image style={{width:200, height:200, resizeMode:"contain"}} source={{uri:"https://picsum.photos/200/300"}}/>
          </SafeAreaView>
        </NavigationContainer>
    )
}

export default MainNavigator
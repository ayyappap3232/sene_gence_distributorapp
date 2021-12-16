import React from 'react';
import {
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

interface IPressableButtonProps {
  children: React.ReactNode;
  onPress: (event: GestureResponderEvent) => void;
  containerStyle?: {}
}

export default function PressableButton({
  children,
  onPress,
  containerStyle
}: IPressableButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.pressable, containerStyle]}
      android_ripple={{color: '#fff'}}
      >
      {children}
    </Pressable>
  );
}

const styles = StyleSheet.create({
    pressable:{
        backgroundColor: '#f00000',
        width: 200,
        alignItems: 'center',
        padding: 10,
        borderRadius: 5,
      }
});

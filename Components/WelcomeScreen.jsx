import React from 'react'
import { View, Text,StyleSheet,Image } from 'react-native'

const WelcomeScreen = () => {
  return (
    <View style={styles.container} >
      <View style={styles.centeredView} >
        <Image source={require('../assets/welcome.png')} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
      },
      centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width:'400px',
        height:'600px',
        flexShrink: 0,
        background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.62) 0%, #000 77.64%)'
      },
    })
export default WelcomeScreen
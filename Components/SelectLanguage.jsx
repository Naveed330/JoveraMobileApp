import React from 'react'
import { View, Text,Image,StyleSheet,Pressable } from 'react-native'
// import Video from 'react-native-video';
const SelectLanguage = () => {
  return (
    <View style={styles.container}>

    <View style={styles.centeredView}>

        <Image source={require('../assets/joveragroup.png')} />
                <View style={{marginTop:'40px'}} >
                <Image source={require('../assets/language.png')} />
            </View>

            <View style={styles.buttonView} >

                <View>
                    <Pressable style={styles.Englishbutton} >
                        <Image source={require('../assets/UK.png')} />
                        <Text style={styles.text} >English</Text>
                    </Pressable>
                </View>

                <View>
                    <Pressable style={styles.Arabicbutton} >
                        <Image source={require('../assets/arabic.png')} />
                        <Text style={styles.text} >عربي</Text>
                    </Pressable>
                </View>

            </View>

        </View>
            <View style={styles.dymmytext} >
            <Image source={require('../assets/dummytext.png')} />
        </View>

    </View>

  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
      },
      centeredView: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        width:'400px',
        flexShrink: 0
      },
      Englishbutton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center',
        gap:'8px',
        backgroundColor: '#000000',
        paddingVertical: 8, // Adjust as needed
        paddingHorizontal: 18,
        borderRadius: 20,
    },
    Arabicbutton:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center',
        gap:'8px',
        backgroundColor: '#000000',
        paddingVertical: 8, // Adjust as needed
        paddingHorizontal: 24,
        borderRadius: 20,
    },
    buttonView : {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center',
        gap:'8px',
        marginTop:'20px'
    },
    text: {
      fontSize: 16,
      lineHeight: 10,
      letterSpacing: 0.25,
      color: '#FFFFFF',
    },
    dymmytext : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width:'400px',
        flexShrink: 0
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
      },
})
export default SelectLanguage
        
  

        
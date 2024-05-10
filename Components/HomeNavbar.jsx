import React from 'react'
import { View, Text,StyleSheet,Image,Pressable } from 'react-native'

const HomeNavbar = () => {
  return (
    <View style={styles.container} >
        <View style={styles.navbar} >

            <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center', gap:'12px'}} >
                <View>
                    <Image
                        source={require('../assets/Vector.png')}
                    />
                </View>

                <View style={{flexDirection:'row' , justifyContent:'center', alignItems:'center', gap:'5px' }} >
                    <Image
                        source={require('../assets/logo.png')}
                    />
                    <Text style={{ textTransform: 'uppercase', fontWeight:500 }} >Jovera Group</Text>
                </View>
            </View>


            <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center', gap:'10px' }} >
                <Pressable>
                    <Image
                        source={require('../assets/notification.png')}
                    />
                </Pressable>
               
                <Pressable style={styles.Arabicbutton} >
                    <Text style={styles.text} >Login</Text>
                    <Image source={require('../assets/loginicon.png')} />
                </Pressable>
            </View>
        </View>
     
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.07))',
      },
      navbar : {
        fill: '#FFF',
        boxShadow: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.07))',
        width: '100%',
        maxWidth:'430px',
        height: '76px',
        flexShrink: 0,
        marginTop: '-2px',
        elevation: 4,
        backgroundColor: '#FFF',
        flexDirection: 'row',
        alignItems: 'end', 
        justifyContent:'space-around',
        paddingVertical: 8,
        
    },
    Arabicbutton : {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center',
        gap:'8px',
        backgroundColor: '#FFCD56',
        paddingVertical: 8, // Adjust as needed
        paddingHorizontal: 20,
        borderRadius: 20,
    }
})
export default HomeNavbar










import React from 'react'
import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import HomeNavbar from '../HomeNavbar'

const ProfileIncomplete = () => {
  return (
    <View style={styles.container} >
        <View style={styles.centeredView} >
            <View style={{width:'100%' , maxWidth:'350px', margin:'auto',  flexDirection:'column', justifyContent:'center', alignItems:'center' }} >
                <Image source={require('../../assets/Error.png')} />

                <View>
                     <Text style={{ fontSize:'24px', fontWeight:400, textAlign:'center', marginTop:'15px'  }} > <span style={{ fontWeight:700 }} > Profile Incomplete!</span> Complete  your profile details. </Text>
                </View>

                <View>
                    <Pressable style={styles.clickbtn} >
                        <Text style={{color:'white' , fontSize:'25px', fontWeight:500,textAlign:'center'}} >Click here</Text>
                    </Pressable>
                </View>
            </View>
            
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
        flex: 9,
        justifyContent: 'start',
        alignItems: 'center',
        width:'400px',
        height:'600px',
        flexShrink: 0,
        background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.62) 0%, #000 77.64%)'
    },
    clickbtn:{
        backgroundColor:'#000',
        borderRadius:'39.614px',
        width: '247px',
        height:'42px', 
        marginTop:'80px',paddingVertical:'3px'
    }
})
export default ProfileIncomplete
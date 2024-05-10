import React from 'react'
import { View, Text,StyleSheet,Image, Pressable } from 'react-native'
import Navbar from '../Navbar/Navbar'

const Dashboard = () => {
  return (
    <View style={styles.container} >
        <View style={styles.centeredView} >
            <View>
                <Navbar/>
            </View>
            <View style={styles.DashboardImage} >
                <Image style={{ width:'276px',height:'276px',borderRadius:'276px' }} source={require('../../assets/profile.jpg')} />
            </View>

            <View>
                <Text style={styles.username} >Username</Text>
            </View>

            <View style={{ marginTop:'30px' }} >
                <Pressable style={styles.trackApplicationbtn} >
                    <Text style={styles.trackApplication} >Track Application</Text>
                </Pressable>
            </View>

            <View style={{ marginTop:'30px' }} >
                <Pressable style={styles.trackApplicationbtn} >
                    <Text style={styles.trackApplication} >More Services</Text>
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
      },
      DashboardImage : {
        width: '276px',
        height:'276px',
        borderRadius:'276px',
        marginTop:'40px',
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
      username:{
        color: '#000',
        fontSize: '41px',
        fontWeight:500,
        lineHeight:'57px'
      },
      trackApplicationbtn:{
        width: '360px',
        height:'70px',
        paddingHorizontal:'10px',
        paddingVertical:'10px',
        borderRadius:'8px',
        border:'1px solid #000',
        backgroundColor:'rgba(0, 0, 0, 0.78)',
        display:'flex', justifyContent:'center', alignItems:'center'
      },
      trackApplication:{
        color:'white',
        fontSize:'25px', fontWeight:500, lineHeight:'22px'
      }
    })

export default Dashboard
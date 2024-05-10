import React,{useState} from 'react'
import { View, Text,Image,StyleSheet,ImageBackground,Pressable } from 'react-native'
import HomeNavbar from './HomeNavbar'
import backgroundImage from '../assets/bgcommon.png'

const BusinessFinance = () => {
 return (
    <View style={styles.container} >
          <HomeNavbar/>
        <View style={styles.centeredView} >
          <ImageBackground 
              source={backgroundImage}
              style={styles.imageBackground}
          >
            <View style={{ flexDirection:'row', justifyContent:'center', alignItems:'center' }} >
              <Image
                  source={require('../assets/businessfinance.png')}
                  style={{ marginTop:'90px'}}
                  />
            </View>

            <View style={{ flexDirection:'row', justifyContent:'space-between', marginTop:'40px' }} >
              <Pressable>
                <Image
                    source={require('../assets/backward.png')}
                    style={{  marginLeft:'22px' }}
                  />
              </Pressable>
           <Pressable>
               <Image
                  source={require('../assets/forward.png')}
                  style={{  marginRight:'22px' }}
                />
           </Pressable>
            
             
            </View>

              <Pressable style={styles.applyButton}>
                    <Text style={ styles.text }>APPLY</Text>
              </Pressable>

            <View style={{ flexDirection:'row', justifyContent:'center', alignItems:'center',marginTop:'20px' }} >
                <Image
                  source={require('../assets/businessfinances.png')}
                />
            </View>

            <View style={styles.businessFinance} >
              <Text style={{ color:'#FFF', fontSize:'16px', fontWeight:700, lineHeight:'22.4px' }} >
                 Business Finance
              </Text>

              <Text  style={{ color:'#FFF', fontSize:'16px', fontWeight:500, lineHeight:'22.4px', marginTop:'10px' }} >
              Jovera Group excels in offering strategic business finance and loan solutions that cater to your company’s unique financial needs. With a deep understanding of the market dynamics, we provide expert guidance and a diverse range of loan options to help you secure the funding necessary for your business expansion, operational improvements, and strategic initiatives. Our commitment lies in delivering tailored financial solutions that fuel your growth and ensure long-term financial stability.
              </Text>
            </View>
         </ImageBackground>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        overflow:'scroll'
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


    contentContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'Black',
        fontSize:'25px',
        fontWeight: '700',
        lineHeight: '150%',
        textTransform: 'uppercase'
    },
    applyButton: {
      position: 'absolute',
      top: 600,
      left: 18,
      padding: 5,
      backgroundColor: '#DFB74F',
      borderRadius: '44.46px',
      zIndex: 1, 
      boxShadow:' 0px 3.176px 3.176px 0px rgba(0, 0, 0, 0.25)',
      width: '366px',
      justifyContent:'center',
      alignItems:'center',
    },
    businessFinance : {
      display:'flex',
      justifyContent:'center', 
      alignItems:'start', 
      marginTop:'130px', 
      marginLeft:'26px',
    },
})
export default BusinessFinance
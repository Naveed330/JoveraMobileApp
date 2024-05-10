import React,{useState} from 'react'
import { View, Text,Image,StyleSheet,ImageBackground,Pressable } from 'react-native'
import HomeNavbar from './HomeNavbar'
import backgroundImage from '../assets/bgcommon.png'

const Mortgage = () => {
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
                  source={require('../assets/moratges.png')}
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
                  source={require('../assets/mortage.png')}
                />
            </View>

        

              <View style={styles.businessFinance}>
                        <Text style={styles.title}>We offer a range of mortgage</Text>
                        <View style={styles.list}>
                            <Text style={styles.listItem}>New purchase</Text>
                            <Text style={styles.listItem}>Final payment</Text>
                            <Text style={styles.listItem}>Buyout for Mortgage loan</Text>
                            <Text style={styles.listItem}>Refinance your property with equity cash</Text>
                            <Text style={styles.listItem}>Plot and land purchase</Text>
                            <Text style={styles.listItem}>Under construction residential properties</Text>
                            <Text style={styles.listItem}>Mortgage against Rental income</Text>
                            <Text style={styles.listItem}>Commercial properties</Text>
                        </View>
                </View>

                <View style={{ marginLeft:'26px', marginBottom:'20px' }} >
                        <Text style={{marginTop:'10px', color:'white', fontSize: 16,fontWeight: '700', marginBottom:'10px'}} >Mortgage with Extra Benefits</Text>
                        <View style={styles.list} >
                            <Text style={styles.listItem}>Competitive rates starting from 3.99% </Text>
                            <Text style={styles.listItem} >Fixed bank margin as low as 1.5%</Text>
                            <Text style={styles.listItem} >Mortgage solutions for all kinds of properties</Text>
                            <Text style={styles.listItem} >Guaranteed lowest interest rates</Text>
                            <Text style={styles.listItem} >Free no obligation eligibility assessment</Text>
                            <Text style={styles.listItem} >If you have a long-term loan and you own a property we can provide you with a mortgage loan and equity cash if you need</Text>
                            <Text style={styles.listItem} >Tailor-made solutions to suit your specific requirement</Text>
                            <Text style={styles.listItem} >Rates are getting high and you need help to reduce your Installments, call our experts to get you the right solution</Text>
                            <Text style={styles.listItem} >Are you looking to expand your business? Let us help you fulfill your financial need for your business growth by getting you a loan against property or refinancing your property.</Text>
                        </View>
                </View>

                <View style={{ marginLeft:'26px', marginBottom:'20px' }} >
                        <Text style={{marginTop:'10px', color:'white', fontSize: 16,fontWeight: '700', marginBottom:'10px'}} >Representative Illustration</Text>
                        <View style={styles.list} >
                            <Text style={styles.listItem}>Competitive rates starting from 3.99% </Text>
                            <Text style={styles.listItem} >Fixed bank margin as low as 1.5%</Text>
                            <Text style={styles.listItem} >Mortgage solutions for all kinds of properties</Text>
                            <Text style={styles.listItem} >Guaranteed lowest interest rates</Text>
                            <Text style={styles.listItem} >Free no obligation eligibility assessment</Text>
                            <Text style={styles.listItem} >If you have a long-term loan and you own a property we can provide you with a mortgage loan and equity cash if you need</Text>
                            <Text style={styles.listItem} >Tailor-made solutions to suit your specific requirement</Text>
                            <Text style={styles.listItem} >Rates are getting high and you need help to reduce your Installments, call our experts to get you the right solution</Text>
                            <Text style={styles.listItem} >Are you looking to expand your business? Let us help you fulfill your financial need for your business growth by getting you a loan against property or refinancing your property.</Text>
                        </View>
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


    // contentContainer: {
    //     flex: 1,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    // },
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
    businessFinance: {
        marginTop: 130,
        marginLeft: 26,
    },
    title: {
        color: 'white',
        fontSize: 16,
        fontWeight: '700',
        lineHeight: 22.4,
        marginBottom: 10,
    },
    list: {
        marginLeft: 10,
        color:'white'
    },
    listItem: {
        color: 'white',
        fontSize: 16,
        fontWeight: '400',
        color:'white'
    },
    imageBackground:{
        height:'auto',
    }
})
export default Mortgage




                
               
                
                
                
               
               
              

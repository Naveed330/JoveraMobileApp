import React,{useState} from 'react'
import { View, Text,Image,StyleSheet,ImageBackground,Pressable } from 'react-native'
import HomeNavbar from './HomeNavbar'
import backgroundImage from '../assets/bgcommon.png'

const PersonalLoan = () => {
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
                  source={require('../assets/PL.png')}
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
                  source={require('../assets/personalloan.png')}
                />
            </View>

        

              <View style={styles.businessFinance}>
                        <Text style={styles.title}>Personal finance with extra benefits</Text>
                        <View style={styles.list}>
                            <Text style={styles.listItem}>Salary Transfer Required</Text>
                            <Text style={styles.listItem}>Choose Low-Interest Personal Loans in UAE</Text>
                            <Text style={styles.listItem}>Approval with in 7 days</Text>
                            <Text style={styles.listItem}>Minimum Salary Required AED 5,000</Text>
                            <Text style={styles.listItem}>Loan amount up to AED 5 M</Text>
                        </View>
                </View>

                <View style={{ marginLeft:'26px', marginBottom:'20px' }} >
                        <Text style={{marginTop:'10px', color:'white', fontSize: 16,fontWeight: '700', marginBottom:'10px' }} >Disclosure Policy</Text>
                        <View style={styles.list} >
                            <Text style={styles.listItem}>The minimum loan repayment tenure is 6 months and the maximum loan repayment tenure is 48 months.</Text>
                            <Text style={styles.listItem} >APR or Annual Percentage Rate of personal loan may range from 2.43% to 34% in the UAE.</Text>
                            <Text style={styles.listItem} >Processing Fee: 1% of the loan amount with a minimum of AED 500 and up to a maximum of AED 2,500</Text>
                            <Text style={styles.listItem} >Maximum loan amount: AED 5000000</Text>
                        </View>
                </View>

                <View style={{ marginLeft:'26px', marginBottom:'20px',color:'white' }} >
                <Text style={{marginTop:'10px', color:'white', fontSize: 16,fontWeight: '700', marginBottom:'10px' }} >Representative Illustration</Text>
                <View style={styles.list} >
                    <Text style={styles.listItem} >If a customer borrows a loan of AED 20,000 and earns an income of AED 10,000. With a repayment period of 48 months, the EMI would be AED 546 at an effective interest rate of 13.99% per annum. </Text>
                    <Text style={styles.listItem} >The total repayment that would have been paid at the completion of the loan would be AED26,230, The borrower would be paying AED 6,230 as interest. </Text> 
                    <Text style={styles.listItem} >Processing Fee: 1% of Loan amount with min. AED 500 and up to a maximum of AED 2,500.</Text>
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
        // justifyContent: 'start',
        // alignItems: 'center',
        // width:'400px',
        // height:'600px',
        // flexShrink: 0,
        // background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.62) 0%, #000 77.64%)'
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
      top: 650,
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
        color:'white',
        lineHeight: 22.4,

    },
    imageBackground:{
        height:'auto',
    }
})
export default PersonalLoan




                
               
                
                
                
               
               
              

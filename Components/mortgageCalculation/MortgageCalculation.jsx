import React from 'react'
import { View, Text,StyleSheet,Image,TextInput, Pressable,ScrollView  } from 'react-native'
import HomeNavbar from '../HomeNavbar'

const MortgageCalculation = () => {
  return (
    <View style={styles.container} >
       <HomeNavbar/>
      <View style={styles.centeredView} >

        <ScrollView style={styles.scrollView}>
        <View>
            <Image source={require('../../assets/Mortgageloan.png')} />
        </View>
     

        <View style={{marginTop:'5px'}} >
          <Text style={styles.label}>Amount</Text>
              <TextInput
                  style={styles.inputpassword}
                  name='amount'
                  placeholder='100000'
              />
        </View>

        <View style={{marginTop:'5px'}} >
          <Text style={styles.label}>Interest Rate</Text>
              <TextInput
                  style={styles.inputpassword}
                  name='interestrate'
                  placeholder='3.50'
              />
        </View>

        <View style={{marginTop:'5px'}} >
          <Text style={styles.label}>Tenure  (Years)</Text>
              <TextInput
                  style={styles.inputpassword}
                  name='amount'
                  placeholder='10'
              />
        </View>

        <View style={{marginTop:'5px'}} >
          <Text style={styles.label}>Tenure  (Months)</Text>
              <TextInput
                  style={styles.inputpassword}
                  name='amount'
                  placeholder='0'
              />
        </View>

        <View style={{marginTop:'5px'}} >
          <Text style={styles.label}>Desired EMI</Text>
              <TextInput
                  style={styles.inputpassword}
                  name='amount'
                  placeholder='4563'
              />
        </View>

        <View style={{marginTop:'5px'}} >
          <Text style={styles.label}>Interest Rate (%)</Text>
              <TextInput
                  style={styles.inputpassword}
                  name='amount'
                  placeholder='4.80'
                  keyboardType='numeric'
              />
        </View>

        <View style={{marginTop:'5px'}} >
          <Text style={styles.label}>Tenure (Years)</Text>
              <TextInput
                  style={styles.inputpassword}
                  name='amount'
                  placeholder='4.80'
              />
        </View>

        <View style={{marginTop:'5px'}} >
          <Text style={styles.label}>Tenure (Months)</Text>
              <TextInput
                  style={styles.inputpassword}
                  name='amount'
                  placeholder='4.80'
              />
        </View>

        <View style={{width:'100%', maxWidth:'300px' , marginTop:'30px' }} >
          <Text style={styles.monthlyIncome} >Monthly Payment</Text>
          <Text style={{color:'#000' , fontSize:'39px', fontWeight:500 }} >2236 AED</Text>
          <hr style={{ width:'100%' , maxWidth:'320px', height:'0px', strokeWidth:'0.5px', stroke:'rgba(0, 0, 0, 0.50)', marginTop:'10px' }}  />

          <Text style={styles.InterestPayable} >Total Interest Payable</Text>
          <Text style={{color:'#000' , fontSize:'39px', fontWeight:500 }} >7309 AED</Text>
          <hr style={{ width:'100%' , maxWidth:'320px', height:'0px', strokeWidth:'0.5px', stroke:'rgba(0, 0, 0, 0.50)', marginTop:'10px' }}  />

          <Text style={styles.InterestPayable} >Total Amount</Text>
          <Text style={{color:'#000' , fontSize:'39px', fontWeight:500 }} >107309  AED</Text>
          <hr style={{ width:'100%' , maxWidth:'320px', height:'0px', strokeWidth:'0.5px', stroke:'rgba(0, 0, 0, 0.50)', marginTop:'10px' }}  />

          <Text style={styles.InterestPayable} >Desired loan amount approx(by Emi)</Text>
          <Text style={{color:'#000' , fontSize:'39px', fontWeight:500 }} >1,073,090,001 </Text>
        </View>
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
    },
    scrollView: {
      marginHorizontal: 20,
      paddingVertical:'10px'
    },
    centeredView: {
      flex: 8,
      justifyContent: 'start',
      alignItems: 'center',
      width:'430px',
      height:'500px',
      flexShrink: 0
    },
    inputpassword: {
      height: '48px',
      width: '306px',
      borderColor: 'gray',
      backgroundColor: '#F9FAFC',
      color:'black',
      borderRadius:'9px',
      marginTop:'15px',
      padding:'14px',
      border: '1px solid #7A7F81',
      color: 'rgba(0, 0, 0, 0.33)'
    },
    calculate : {
      backgroundColor: '#000',
      border: '1px solid #B18D36',
      borderRadius: '56px',
      boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
      paddingHorizontal:'39px',
      paddingVertical:'15px'
    },
    monthlyIncome : {
      textTransform:'uppercase',
      letterSpacing:'4px',
      fontWeight:500,
      fontSize:'16px',
      color:'#000'
    },
    InterestPayable:{
      textTransform:'uppercase',
      letterSpacing:'4px',
      fontWeight:500,
      fontSize:'16px',
      color:'#000',
      marginTop:'10px'
    }
})
export default MortgageCalculation

    

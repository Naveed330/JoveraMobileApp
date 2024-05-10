import React from 'react'
import { View, Text,StyleSheet,Image,TextInput, Pressable  } from 'react-native'
import HomeNavbar from '../HomeNavbar'

const PersonalLoansCalculate = () => {
  return (
    <View style={styles.container} >
       <HomeNavbar/>
      <View style={styles.centeredView} >
        <View>
            <Image source={require('../../assets/personalloans.png')} />
        </View>
      

        <View>
          <Text style={styles.label}>Amount</Text>
              <TextInput
                  style={styles.inputpassword}
                  name='amount'
                  placeholder='100000'
              />
        </View>

        <View style={{marginTop:'15px'}} >
          <Text style={styles.label}>Interest Rate</Text>
              <TextInput
                  style={styles.inputpassword}
                  name='interestrate'
                  placeholder='3.50'
              />
        </View>

        <View style={{marginTop:'15px'}} >
          <Text style={styles.label}>Tenure (In Years)</Text>
              <TextInput
                  style={styles.inputpassword}
                  name='amount'
                  placeholder='4'
              />
        </View>

        <View style={{marginTop:'35px'}} >
          <Pressable  style={styles.calculate } >
            <Text style={{ textTransform:'uppercase', color:'white' }} >Calculate</Text>
          </Pressable>
        </View>

        <View style={{width:'100%', maxWidth:'280px' , marginTop:'30px' }} >
          <Text style={styles.monthlyIncome} >Monthly Payment(EMI)</Text>
          <Text style={{color:'#000' , fontSize:'39px', fontWeight:500, letterSpacing:'0.39px' }} >2236 AED</Text>
          <hr style={{ width:'100%' , maxWidth:'320px', height:'0px', strokeWidth:'0.5px', stroke:'rgba(0, 0, 0, 0.50)', marginTop:'10px' }}  />

          <Text style={styles.InterestPayable} >Total Interest Payable</Text>
          <Text style={{color:'#000' , fontSize:'39px', fontWeight:500,letterSpacing:'0.39px' }} >7309 AED</Text>
          <hr style={{ width:'100%' , maxWidth:'320px', height:'0px', strokeWidth:'0.5px', stroke:'rgba(0, 0, 0, 0.50)', marginTop:'10px' }}  />

          <Text style={styles.InterestPayable} >Total Amount</Text>
          <Text style={{color:'#000' , fontSize:'39px', fontWeight:500 }} >107309  AED</Text>
        </View>

        {/* <View style={{width:'100%', maxWidth:'300px' , marginTop:'15px' }} >
          <Image source={require('../../assets/principleloan.png')} />
       
          <Image source={require('../../assets/totalinterest.png')} style={{marginTop:'10px'}} />
        </View> */}

        {/* <View style={{marginTop:'30px'}} >
          <Image source={require('../../assets/chart.png')} />
        </View> */}
      </View>
    </View>
  )
}


    

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
      // overflow:'scroll'
    },
    centeredView: {
      flex: 7,
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
      paddingHorizontal:'30px',
      paddingVertical:'8px'
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
export default PersonalLoansCalculate
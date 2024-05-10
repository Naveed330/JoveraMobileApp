import React from 'react'
import { View, Text, StyleSheet, ImageBackground,Image, Pressable, TextInput, ScrollView } from 'react-native'
import HomeNavbar from '../HomeNavbar'
import backgroundImage from '../../assets/helpandsupportbg.png'
import { Calculator } from 'react-native-calculator'
const HelpandSupport = () => {
  return (
    <View style={styles.container}>
           <HomeNavbar/>
           <View style={{ flex: 1 }}>
        <Calculator style={{ flex: 1 }} />
      </View>
   
          {/* <ImageBackground 
                source={backgroundImage}
                style={styles.backgroundImage}
            >
                   <ScrollView contentContainerStyle={styles.scrollView}>
              <View style={{ flexDirection:'row', justifyContent:'center', alignItems:'center' }} >
                <Image
                    source={require('../../assets/helpsupport.png')}
                    style={{ marginTop:'90px'}}
                  />
              </View>

              <View style={{ flexDirection:'row', justifyContent:'center', alignItems:'start' }}  >
              <Image
                    source={require('../../assets/helpsupportlogo.png')}
                    style={{ marginTop:'30px'}}
                  />
              </View>

              <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center', marginTop:'20px'}} >
                  <Pressable style={styles.Faqbtn} >
                      <Text style={{color:'black', textTransform:'uppercase' , textAlign:'center'}} >FAQ</Text>
                  </Pressable>
              </View>

              <View style={{width:'100%' , maxWidth:'350px', margin:'auto', marginTop:'30px', marginBottom:'15px' }} >
                  <Text style={{color:'white', fontSize:'20px' , fontWeight:500 }} >Contact Us</Text>

                  <View style={{flexDirection:'row' , gap:'10px', marginTop:'10px' }} >
                      <Image
                      source={require('../../assets/Phone.png')}
                      />
                      <View>
                          <Text style={{color:'white' , fontSize:'15px', fontWeight:500 }} >Customer Support</Text>
                          <Text style={{color:'white',fontSize:'13px', fontWeight:500}} >800 66 0000</Text>
                      </View>
                  </View>
              </View>
              <hr />

              <View style={{width:'100%' , maxWidth:'350px', margin:'auto', marginTop:'30px' }} >
                  <Text style={{fontSize:'20px' , fontWeight:500, color:'white' }} >Type of Issue</Text>  
                  <View>
                      <Text style={{ color:'white' , marginTop:'15px' }} >Type of Issue</Text>
                  <TextInput
                          style={styles.textarea}
                          placeholder='Describe your issue here'
                          multiline={true}
                          numberOfLines={8}
                      />
                  </View>
              </View>

              <View style={{width:'100%' , maxWidth:'300px', margin:'auto', marginTop:'15px', borderRadius:'8px' }} >
                  <Pressable style={styles.submitbtn} >
                      <Text style={{ color:'white', fontSize:'17px', fontWeight:500, textAlign:'center' }} >Submit</Text>
                  </Pressable>
              </View>
        </ScrollView>
            </ImageBackground> */}
    </View>
)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#FFFFFF',
        // overflow:'scroll'
    },
    scrollView: {
      flexGrow: 1,
    },
      backgroundImage: {
        flex: 8,
        resizeMode: 'cover',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
      },
      Faqbtn:{
        backgroundColor:'#FFF',
        borderRadius: '8px',
        border:'1px solid #000',
        width:'100%',
        maxWidth:'360px',
        paddingHorizontal:'10px',
        paddingVertical:'12px',
      },
      textarea: {
        height: 60, 
        margin: 15,
        borderWidth: 1,
        paddingHorizontal: 22,
        paddingVertical:10,
        backgroundColor: '#FFF',
        color: 'rgba(0, 0, 0, 0.49)',
        fontSize: 16,
        fontWeight: '500',
        borderRadius: 9,
        textAlignVertical: 'top',
      },
      submitbtn:{
        backgroundColor:'#000000',
        paddingHorizontal:'0px',
        paddingVertical:'13px',
        marginBottom:'30px'

      }
})

export default HelpandSupport
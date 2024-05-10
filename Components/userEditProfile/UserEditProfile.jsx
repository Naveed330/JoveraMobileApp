import React from 'react'
import { View, Text, StyleSheet,Image, Pressable, TextInput } from 'react-native'
import Navbar from '../Navbar/Navbar'

const UserEditProfile = () =>{

    const handlePress = () => {
        alert('Edit Profile');
      };

  return (
    <View style={styles.container} >
           <View>
           <Navbar/>
        </View>

            <form>
        <View style={styles.centeredView} >

            <View style={styles.userProfile} >
                <Image style={{ width:'148px',height:'148px',borderRadius:'148px', position:'relative' }} source={require('../../assets/profile.jpg')} />
            </View>

            <View>
                <Pressable style={styles.editprofileButton} onPress={handlePress} >
                    <Image source={require('../../assets/editprofile.png')} />
                </Pressable>
            </View>

            <View style={{marginTop:'5px'}} >
                <Text style={{textAlign:'center' ,fontSize:'27px', fontWeight:400 }} >Abcde</Text>
                <Text style={{fontSize:'17px', fontWeight:400 }} >Abcde@gmail.com</Text>
            </View>

            <View style={{width:'100%' , maxWidth:'300px', marginTop:'30px' }} >
                    <Pressable style={{flexDirection:'row', justifyContent:'start', alignItems:'start', gap:'10px', marginBottom:'20px' }}  >
                        <Image source={require('../../assets/contactlogo.png')} />
                        <Text style={{ fontSize:'18px', color:'#41463D', fontWeight:400 }} >Contact us</Text>
                    </Pressable>
             <hr />
             </View>

             <View style={{width:'100%' , maxWidth:'300px', marginTop:'30px' }} >
                    <Pressable style={{flexDirection:'row', justifyContent:'start', alignItems:'start', gap:'10px', marginBottom:'20px' }}  >
                        <Image source={require('../../assets/privacy.png')} />
                        <Text style={{ fontSize:'18px', color:'#41463D', fontWeight:400 }} >Privacy & safety</Text>
                    </Pressable>
             <hr />
             </View>

             <View style={{width:'100%' , maxWidth:'300px', marginTop:'30px' }} >
                    <Pressable style={{flexDirection:'row', justifyContent:'start', alignItems:'start', gap:'10px', marginBottom:'20px' }}  >
                        <Image source={require('../../assets/report.png')} />
                        <Text style={{ fontSize:'18px', color:'#41463D', fontWeight:400 }} >Report an issue</Text>
                    </Pressable>
             <hr />
             </View>

             <View style={{width:'100%' , maxWidth:'300px', marginTop:'30px' }} >
                    <Pressable style={{flexDirection:'row', justifyContent:'start', alignItems:'start', gap:'10px', marginBottom:'20px' }}  >
                        <Image source={require('../../assets/logout.png')} />
                        <Text style={{ fontSize:'18px', color:'#41463D', fontWeight:400 }} >Log out</Text>
                    </Pressable>
             <hr />
             </View>

             <View style={{width:'100%' , maxWidth:'300px', marginTop:'30px' }} >
                    <Pressable style={{flexDirection:'row', justifyContent:'start', alignItems:'start', gap:'10px', marginBottom:'20px' }}  >
                        <Image source={require('../../assets/delete.png')} />
                        <Text style={{ fontSize:'18px', color:'#41463D', fontWeight:400 }} >Delete Account</Text>
                    </Pressable>
             <hr />
             </View>

            {/* <View style={{marginTop:'20px'}} >
              <Text style={{ marginBottom:'-5px', marginLeft:'10px' }} >Phone Number</Text>
                <TextInput
                    style={styles.input}
                    name='phonenumber'
                    placeholder='+973 123456789'
            />
            <hr />
            </View>

            <View style={{marginTop:'20px'}} >
              <Text style={{ marginBottom:'-5px', marginLeft:'10px' }} >Email</Text>
                <TextInput
                    style={styles.input}
                    name='email'
                    placeholder='abcde@gmail.com'
            />
            <hr />
            </View> */}
             </View>


            </form>
    </View>
  )
}
     
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
      },
      centeredView:{
        flex: 1,
        justifyContent: 'start',
        alignItems: 'center',
        width:'400px',
        height:'600px',
        flexShrink: 0,
        background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.62) 0%, #000 77.64%)'
      },
      userProfile:{
        width: '148px',
        height: '148px',
        borderRadius: '148px',
        marginTop:'30px'
      },
      editprofileButton:{
        position:'absolute',
        top:-40,
        left:50
      },  
      input: {
        height: '48px',
        width: '332px',
        // borderB: '1px solid #7A7F81',
        // backgroundColor: '#F9FAFC',
        color:'black',
        borderRadius:'9px',
        marginTop:'4px',
        padding:'14px',
        display: 'inline-flex',
        alignItems: 'center',
      },
      savebtn:{
        width: '224px',
        paddingHorizontal:'27px',
        paddingVertical:'6px',
        borderRadius:'55px',
        backgroundColor:'#F3C147'
      }
    })
export default UserEditProfile




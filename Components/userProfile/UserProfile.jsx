import React from 'react'
import { View, Text, StyleSheet,Image, Pressable, TextInput } from 'react-native'
import Navbar from '../Navbar/Navbar'

const UserProfile = () =>{

    const handlePress = () => {
        alert('working');
      };

  return (
    <View style={styles.container} >
        <View>
           <Navbar/>
        </View>

        { <form>
        <View style={styles.centeredView} >

            <View style={styles.userProfile} >
                <Image style={{ width:'148px',height:'148px',borderRadius:'148px', position:'relative' }} source={require('../../assets/profile.jpg')} />
            </View>

            <View>
                <Pressable style={styles.profileButton} onPress={handlePress} >
                    <Image source={require('../../assets/profileButton.png')} />
                </Pressable>
            </View>

            <View style={styles.mainInputField} >
                <View style={{marginTop:'18px'}} >
                  <Text style={{ marginBottom:'-5px', marginLeft:'10px' }} >Name</Text>
                    <TextInput
                        style={styles.input}
                        name='name'
                        placeholder='Abcde'
                />
                <hr />
                </View>

                <View style={{marginTop:'20px'}} >
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
                </View>
            </View>



            <View style={{marginTop:'200px'}}  >
                <Pressable style={styles.savebtn} >
                    <Text style={{textAlign:'center' , fontSize:'25px', fontWeight:500, lineHeight:'35px' }} >Save</Text>
                </Pressable>
             </View>
             </View>
        </form> }
    </View>
  )
}
     
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
      },
      centeredView:{
        flex: 3,
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
      profileButton:{
        position:'absolute',
        top:-40,
        left:30
      },  
      input: {
        height: '48px',
        width: '328px',
        // borderB: '1px solid #7A7F81',
        // backgroundColor: '#F9FAFC',
        color:'black',
        borderRadius:'9px',
        marginTop:'4px',
        padding:'14px',
        display: 'inline-flex',
        alignItems: 'flex-start',
        justifyContent:'center',
        borderRadius:'4px 4px 0px 0px'
      },
      savebtn:{
        width: '224px',
        paddingHorizontal:'27px',
        paddingVertical:'6px',
        borderRadius:'55px',
        backgroundColor:'#F3C147'
      },
      mainInputField:{
        display: 'flex',
        width: '328px',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: '10px',
        paddingHorizontal:'8px', paddingVertical:'16px'
      }
    })
export default UserProfile




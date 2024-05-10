import React,{useState} from 'react'
import { View, Text,StyleSheet, Pressable,Image,TextInput } from 'react-native'

const ForgotPassword = () => {
    const [email,setEmail] = useState('')
  return (
    <View style={styles.container} >
      <View style={styles.centeredView}  >
        <View style={styles.imageforgotpassword} >
            <Pressable>
                <Image source={require('../../assets/forgotpassword.png')} />
            </Pressable>
        </View>

        <View style={{ marginTop:'30px' }} >
            <Image source={require('../../assets/Forgotpasswords.png')} />
            <Text style={{marginTop:'10px', color:'#A4A4A4'}} >Please enter your email to reset the password</Text>
        </View>

        <View style={{ marginTop:'30px' }} >
            <Text style={styles.label}>Your Email</Text>
            <TextInput
                style={styles.inputpassword}
                name='email'
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
             />
        </View>

        <View style={{ marginTop:'40px' }} >
            <Pressable style={styles.resetPassword} >
                <Text style={{ color:'white', fontSize:'16px', fontWeight:500 }} >Reset Password</Text>
            </Pressable>
        </View>

        <View style={styles.imageDesign} >
            <Image
                source={require('../../assets/loginfooter.png')}
                style={styles.image}
            />
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
        flex: 1,
        justifyContent: 'start',
        alignItems: 'center',
        width:'450px',
        height:'500px',
        flexShrink: 0
      },
      imageforgotpassword : {
        width:'100%',
        maxWidth:'380px',
        marginTop:'100px'
      },
      inputpassword: {
        height: '48px',
        width: '332px',
        borderColor: 'gray',
        backgroundColor: '#F9FAFC',
        color:'black',
        borderRadius:'9px',
        marginTop:'15px',
        padding:'14px',
        border: '1px solid #7A7F81',
      },
      label: {
        fontSize: 16,
        color: '#333',
      },
      resetPassword : {
        backgroundColor:'#000',
         borderRadius:'8px',
         paddingHorizontal:'70px', paddingVertical:'20px'
      },
      // imageDesign: {
      //   position: 'absolute',
      //   bottom: 0,
      //   left: 0,
      //   right: 0,
      //   alignItems: 'center',
      
      // },
      imageDesign : {
        width: '100%',
        height: '250px',
        flexShrink: 0,
        display:'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        // marginTop:'120px'
        position:'absolute', bottom:0
    },
    image: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
    },
})

export default ForgotPassword
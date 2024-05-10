import React,{useState} from 'react'
import { View, Text,StyleSheet, Pressable,Image,TextInput } from 'react-native'

const SetNewPassword = () => {
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
            <Image source={require('../../assets/setnewpassword.png')} />
            <View style={{ width:'100%', maxWidth:'300px'}} >
            <Text style={{marginTop:'10px', color:'#A4A4A4'}} >Create a new password. Ensure it differs from previous ones for security</Text>
            </View>
        </View>

        <View style={{ marginTop:'30px' }} >
            <Text style={styles.label}>Password</Text>
            <TextInput
                style={styles.inputpassword}
                name='email'
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                placeholder='Enter your new password'
             />
        </View>

        <View style={{ marginTop:'30px' }} >
            <Text style={styles.label}>Confirm password</Text>
            <TextInput
                style={styles.inputpassword}
                name='email'
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                placeholder='Re-enter password'
             />
        </View>

        <View style={{ marginTop:'40px' }} >
            <Pressable style={styles.resetPassword} >
                <Text style={{ color:'white', fontSize:'16px', fontWeight:500 }} >Confirm</Text>
            </Pressable>
        </View>

        <View style={styles.imageDesign} >
            <Image
                source={require('../../assets/loginfooter.png')}
                style={styles.image}
            />
       </View>

      {/* <View>
        <Image source={require('../../assets/truepassword.png')} />
      </View> */}
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
        color: 'rgba(0, 0, 0, 0.33)'
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

export default SetNewPassword
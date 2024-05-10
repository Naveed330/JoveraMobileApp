import React,{useState} from 'react'
import Navbar from '../Navbar/Navbar'
import {View, Text,StyleSheet ,TextInput,Image,Pressable} from 'react-native'
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');


    // Login API
      const handleButtonPress = () => {
        setEmailError('');
        setPasswordError('');

           // Validate email
    if (!email.trim()) {
        setEmailError('Email is required');
      }

         // Validate password
    if (!password.trim()) {
        setPasswordError('Password is required');
      }

      if (email.trim() && password.trim()) {
        console.log('input Fields : ', email , password  );
      }

        setEmail('')
        setPassword('')
      };

  return (
    <View style={styles.container} >
    <Navbar/>
    <View style={styles.centeredView} >
    <Text style={styles.titleText} >
       Login to Jovera
    </Text>
    <View>
    <TextInput
        style={styles.input}
        name='email'
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        placeholder="Username / Email"
      />
        {emailError ? <Text style={styles.error}>{emailError}</Text> : null}
    </View>
    <View>
    <TextInput
        style={styles.inputpassword}
        name='password'
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        placeholder="Password"
      />
        {passwordError ? <Text style={styles.error}>{passwordError}</Text> : null}
    </View>

    <View style={styles.Viewbutton} >

    <Pressable style={styles.button} onPress={handleButtonPress}   >
      <Text style={styles.text}>Login</Text>
    </Pressable>

    </View>

    <View style={{ flexDirection:'row', gap:'15px', marginTop:'30px' }} >
        <Text style={{fontSize:'14px', fontWeight:'500', letterSpacing:'1.4px', color:'#000'}} >Create new account.</Text>
        <Text style={{fontSize:'14px', fontWeight:'500', letterSpacing:'1.4px', color:'#D7AC47', textDecorationLine:'underline' }} onPress={()=>('Register')} >Sign up</Text>
    </View>

    <View style={{ flexDirection:'row', gap:'15px', marginTop:'15px' }} >
        <Text style={{fontSize:'14px', fontWeight:'500', letterSpacing:'1.4px', color:'#000'}} >Forgot password.</Text>
        <Text style={{fontSize:'14px', fontWeight:'500', letterSpacing:'1.4px', color:'#D7AC47', textDecorationLine:'underline' }} onPress={()=>('Register')} >Forget</Text>
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
      flex: 2,
      justifyContent: 'start',
      alignItems: 'center',
      width:'450px',
      height:'500px',
      flexShrink: 0
    },
    titleText: {
        color: '#000',
        textAlign: 'center',
        fontFamily: 'HARMONY',
        fontSize: '31px',
        fontStyle: 'normal',
        fontWeight: 500,
        lineHeight: '150%',
    },

    input: {
        height: '48px',
        width: '332px',
        border: '1px solid #7A7F81',
        backgroundColor: '#F9FAFC',
        color:'black',
        borderRadius:'9px',
        marginTop:'15px',
        padding:'14px',
        display: 'inline-flex',
        alignItems: 'center'
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
      Viewbutton : {
        width: '258px',
        height: '48px',
        flexShrink: 0,
        marginTop:'15px',
        borderRadius: '8px'
},
imageDesign : {
    width: '100%',
    height: '400px',
    flexShrink: 0,
    display:'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
},
error: {
    color: 'red',
    fontSize: 12,
    marginTop: 5
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  });

export default Login
  

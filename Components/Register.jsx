import React,{useState} from 'react'
import {View, Text,StyleSheet ,TextInput,Button,Pressable,Image } from 'react-native'
import Navbar from './Navbar/Navbar'
const Register = () => {
    const [name,setName] =  useState('')
    const [email, setEmail] = useState('');
    const [phonenumber, setPhoneNumber] = useState('');
    const [createpassword, setCreatePassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [phoneNumberError, setphoneNumberError] = useState('');
    const [createPasswordError, setCreatePasswordError] = useState('');
    // const [ConfirmPasswordError, setConfirmPasswordError] = useState('');

    const handleSignUpPress = () => {

        if (!name.trim()) {
            setNameError('Name is Required');
          }

          if (!phonenumber.trim()) {
            setphoneNumberError('Phone Number is Required');
          }

          if (!email.trim()) {
            setEmailError('Email is Required');
           }


          if (!createpassword.trim()) {
            setCreatePasswordError('Please Create Password');
          }

          if (email.trim() && createpassword.trim() && phonenumber.trim() && name.trim() ) {
            console.log('input Fields : ', name , phonenumber, email,createpassword);
          }

        //   if (!confirmpassword.trim()) {
        //     setEmailError('Email is required');
        //   }
          
      

        console.log(name,email,phonenumber,createpassword,confirmpassword,'handleSignUpPress');
        setName('')
        setEmail('')
        setPhoneNumber('')
        setCreatePassword('')
        setConfirmPassword('')
    }

  return (
    <View style={styles.container} >
    <Navbar/>
    <View style={styles.centeredView} >
    <Text style={styles.signup}  >
       Sign up to Jovera
    </Text>
    <View style={{marginTop:'30px'}} >
        <label>Name<span style={{color:'red'}} > *</span></label>
    <TextInput
        style={styles.input}
        name='name'
        value={name}
        onChange={(e)=>setName(e.target.value)}
        placeholder="Full Name"
        
      />
          {nameError ? <Text style={styles.error}>{nameError}</Text> : null}
    </View>

    <View style={{marginTop:'15px'}} >
        <label>Email Id<span style={{color:'red'}} > *</span></label>
    <TextInput
        style={styles.input}
        name='email'
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        placeholder="Email id"
      />
       {emailError ? <Text style={styles.error}>{emailError}</Text> : null}
    </View>

    <View style={{marginTop:'15px'}} >
        <label>Phone Number<span style={{color:'red'}} > *</span></label>
    <TextInput
        style={styles.input}
        name='phonenumber'
        value={phonenumber}
        onChange={(e)=>setPhoneNumber(e.target.value)}
        placeholder="Phone Number"
      />
         {phoneNumberError ? <Text style={styles.error}>{phoneNumberError}</Text> : null}
    </View>

    <View style={{marginTop:'15px'}} >
        <label>Create Password<span style={{color:'red'}} > *</span></label>
    <TextInput
        style={styles.input}
        name='createpassword'
        value={createpassword}
        onChange={(e)=>setCreatePassword(e.target.value)}
        placeholder="Create Password"
      />
       {createPasswordError ? <Text style={styles.error}>{createPasswordError}</Text> : null}
    </View>


    <View style={{marginTop:'18px'}} >
    <TextInput
        style={styles.input}
        name='confirmpassword'
        value={confirmpassword}
        onChange={(e)=>setConfirmPassword(e.target.value)}
        placeholder="Confirm Password"
      />
    </View>

    <View style={styles.Viewbutton} >
    <Pressable style={styles.button} onPress={handleSignUpPress}>
      <Text style={styles.text}>Sign up</Text>
    </Pressable>
    </View>

    <View style={{ flexDirection:'row', gap:'10px', marginTop:'30px' }} >
        <Text style={{fontSize:'14px', fontWeight:'500', letterSpacing:'1.4px', color:'#000'}} >Already have an account ? </Text>
        <Text style={{fontSize:'14px', fontWeight:'500', letterSpacing:'1.4px', color:'#D7AC47', textDecorationLine:'underline' }} onPress={()=>('Register')} >Login</Text>
    </View>

    <View style={{ flexDirection:'row', gap:'15px', marginTop:'15px' }} >
        <Text style={{fontSize:'14px', fontWeight:'500', letterSpacing:'1.4px', color:'#000'}} >Forgot password.</Text>
        <Text style={{fontSize:'14px', fontWeight:'500', letterSpacing:'1.4px', color:'#D7AC47', textDecorationLine:'underline' }} onPress={()=>('Register')} >Forget</Text>
    </View>

    <View style={styles.imageDesign} >
            <Image
                source={require('../assets/loginfooter.png')}
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
        flex: 5,
        justifyContent: 'start',
        alignItems: 'center',
        width:'450px',
        height:'600px',
        flexShrink: 0
      },
      signup : {
        color: '#000',
        textAlign: 'center',
        fontFamily: 'HARMONY',
        fontSize: '31px',
        fontWeight: 500,
        lineHeight: '150%'
    },
    input: {
        height: '48px',
        width: '332px',
        border: '1px solid #7A7F81',
        backgroundColor: '#F9FAFC',
        color:'black',
        borderRadius:'9px',
        marginTop:'4px',
        padding:'14px',
        display: 'inline-flex',
        alignItems: 'center'
      },
      Viewbutton : {
        width: '258px',
        height: '48px',
        flexShrink: 0,
        marginTop:'15px',
        borderRadius: '8px',
        display: 'flex',
        justifyContent:'center',
        // backgroundColor: '#000',
        borderRadius: '8px'
},
imageDesign : {
    width: '100%',
    height: '250px',
    flexShrink: 0,
    display:'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
},
image: {
  width: '100%',
  height: '100%',
  resizeMode: 'cover',
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
})

export default Register

   


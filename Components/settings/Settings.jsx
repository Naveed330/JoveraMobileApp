import React,{useState} from 'react'
import { View, Text, StyleSheet, Image, Picker  } from 'react-native'
import HomeNavbar from '../HomeNavbar'

const Settings = () => {
    const [selectedOption, setSelectedOption] = useState('Option 1');
  return (
    <View style={styles.container} >
        <HomeNavbar/>
        <View style={styles.centeredView} >
            <View style={{marginTop:'50px'}} >
               <Image source={require('../../assets/Settingslogo.png')} />
            </View>

            <View style={{width:'100%' , maxWidth:'280px', marginTop:'30px' }} >
                <Text style={{color:'#707070' , fontSize:'20px', fontWeight:500 }} >PREFERENCES</Text>
            </View>

            <View style={{width:'100%' , maxWidth:'280px', marginTop:'30px'  }} >
                <View style={{flexDirection:'row' , justifyContent:'start', alignItems:'center', gap:'8px', }} >
                    <Image source={require('../../assets/uilanguage.png')} />
                    <Text style={{fontSize:'16px', fontWeight:500, color:'#000000'}} >Language</Text>
                </View>
  
                <Picker
                    selectedValue={selectedOption}
                    style={styles.dropdown}
                    onValueChange={(itemValue, itemIndex) =>
                    setSelectedOption(itemValue)
                    }>
                    <Picker.Item style={{fontSize:'16px', fontWeight:500}} label="English" value="English" />
                    <Picker.Item style={{fontSize:'16px', fontWeight:500}} label="Urdu" value="Urdu" />
                </Picker>
            </View>

            <View style={{width:'100%' , maxWidth:'280px', marginTop:'30px'  }} >
                <View style={{flexDirection:'row' , justifyContent:'start', alignItems:'center', gap:'8px', }} >
                    <Image source={require('../../assets/defaultlogo.png')} />
                    <Text style={{fontSize:'16px', fontWeight:500, color:'#000000' }} >Display Style</Text>
                </View>
  
                <Picker
                    selectedValue={selectedOption}
                    style={styles.dropdown}
                    onValueChange={(itemValue, itemIndex) =>
                    setSelectedOption(itemValue)
                    }>
                    <Picker.Item  style={{fontSize:'16px', fontWeight:500}} label="System (default)" value="System (default)" />
                    <Picker.Item  style={{fontSize:'16px', fontWeight:500}} label="Dark" value="Dark" />
                    <Picker.Item  style={{fontSize:'16px', fontWeight:500}} label="Light" value="Light" />
                </Picker>
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
        flex: 9,
        justifyContent: 'start',
        alignItems: 'center',
        width:'400px',
        height:'600px',
        flexShrink: 0,
        background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.62) 0%, #000 77.64%)'
    },
    dropdown:{
        width:'100%' , marginTop: 10, maxWidth:'280px', height:'24px',paddingHorizontal:'20px', border:'none'
    }
})

export default Settings



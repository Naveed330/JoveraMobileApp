import React,{useState} from 'react'
import { View, Text, StyleSheet, Image,TextInput, Pressable } from 'react-native'
import HomeNavbar from '../HomeNavbar'
import EmojiSelector from 'react-native-emoji-selector';
const FeedBackForm = () => {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')

    const customEmojis = ['😊', '😄', '😃', '😁', '😆'];
  return (
    <View style={styles.container} >
        <HomeNavbar/>
        <View style={styles.centeredView} >
            <View style={{marginTop:'40px'}} >
              <Image source={require('../../assets/feedbackform.png')} />
            </View>

            <View>
                <TextInput
                    style={styles.input}
                    name='name'
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    placeholder="Your Name"
                />
            </View>

            <View>
                <TextInput
                    style={styles.email}
                    name='email'
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    placeholder="Your Email"
                />
            </View>

            {/* <View style={{marginTop:'30px'}} >
                <EmojiSelector
                    data={customEmojis}
                    onEmojiSelected={emoji => console.log(emoji)}
                    numColumns={1} 
                    showSearchBar={false}
                    showSectionTitles={true}
                    showHistory={false}
                    showTabs={false}
                />
            </View> */}

            <View>
                 <TextInput
                        style={styles.textarea}
                        placeholder='Add Your Comments'
                        multiline={true}
                        numberOfLines={8}
                    />
            </View>

            <View>
                <Pressable style={styles.submitbtn} >
                    <Text style={{fontSize:'24px', color:'#000', fontWeight:500}} >Submit</Text>
                </Pressable>
            </View>

            {/* <View style={{flexDirection:'column' , justifyContent:'center' , alignItems:'center' }} >
                <Image source={require('../../assets/truepassword.png')} />
                <Text style={{color:'#F3C147' ,fontSize:'42px',  textTransform:'uppercase' ,fontWeight:500  }} >Submited</Text>
            </View> */}
        </View>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        overflow:'scroll'
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
      input: {
        height: '48px',
        width: '332px',
        border: '1px solid #000',
        backgroundColor: '#F9FAFC',
        color:'black',
        borderRadius:'9px',
        marginTop:'15px',
        padding:'14px',
        display: 'inline-flex',
        alignItems: 'center'
      },
      email: {
        height: '48px',
        width: '332px',
        border: '1px solid #000',
        backgroundColor: '#F9FAFC',
        color:'black',
        borderRadius:'9px',
        marginTop:'25px',
        padding:'14px',
        display: 'inline-flex',
        alignItems: 'center'
      },
      textarea: {
        height: 150, width: '320px',
        margin: 25,
        borderWidth: 1,
        paddingHorizontal: 20,
        paddingVertical:10,
        backgroundColor: '#FFF',
        color: 'rgba(0, 0, 0, 0.49)',
        fontSize: 16,
        fontWeight: '500',
        borderRadius: 9,
        textAlignVertical: 'top',
      },
      submitbtn : {
        backgroundColor:'#F3C147',
        borderRadius:'52.147px',
        paddingHorizontal:'30px',
        paddingVertical:'10px'
      }
})
export default FeedBackForm
import React,{useState} from 'react'
import { View, Text,StyleSheet,ImageBackground ,Image ,SafeAreaView, TextInput,Picker,CheckBox,Pressable, } from 'react-native'
import HomeNavbar from './HomeNavbar'
import backgroundImage from '../assets/bg_foam.png'
const PersonalLoanForm = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const [isSelected, setSelection] = useState(false);
  return (
    <View style={styles.container} >
         <HomeNavbar/>
         <View style={styles.centeredView} >
            <ImageBackground 
                source={backgroundImage}
                style={styles.backgroundImage}
            >
          <View style={styles.contentContainer}>
            <View>
                  <Image
                      source={require('../assets/personalfoam.png')}
                      style={{ marginTop:'120px', marginLeft:'25px', marginRight:'20px'}}
                    />
            </View>


            <View style={styles.formContainer} >
                <form>
                    <SafeAreaView style={styles.formContent} >  
                        <TextInput style={styles.input} placeholder="Company Name" />
                        <TextInput style={styles.input} placeholder="Monthly Salary AED" />
                        <TextInput style={styles.input} placeholder="Loan Amount Optional" />
                        <View style={styles.input}>
                            <Picker
                                selectedValue={selectedOption}
                                style={ styles.picker}
                                onValueChange={(itemValue) => setSelectedOption(itemValue)}>
                                <Picker.Item label="Do You Have Any Loan" value="" />
                                <Picker.Item label="Option 1" value="option1" />
                                <Picker.Item label="Option 2" value="option2" />
                                <Picker.Item label="Option 3" value="option3" />
                            </Picker>
                    </View>
                        <TextInput
                            style={styles.textarea}
                            placeholder='Message'
                            multiline={true}
                            numberOfLines={8}
                        />
                    </SafeAreaView>

                    <View style={styles.checkboxContainer} >
                        <CheckBox
                            value={isSelected}
                            onValueChange={setSelection}
                            style={styles.checkbox}
                        />

                        <View>
                            <Text style={styles.consent} >I give consent to Jovera Group to <br /> contact me & share my details with <br /> the UAE registered banks.</Text>
                        </View>
                    </View>

                    <View style={{flexDirection:'row' , justifyContent:'center', alignItems:'center', marginTop:'20px' }} >
                        <Pressable style={styles.submitButton}>
                            <Text style={styles.submitButtonText}>Submit</Text>
                        </Pressable>
                    </View>
                </form>
            </View>
          </View>
            </ImageBackground>
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
      },
      contentContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'start',
        },
        formContainer: {
          width: '100%',
          alignItems: 'start',
          marginTop:'25px'
        },
        backgroundImage: {
          flex: 1,
          resizeMode: 'cover',
          justifyContent: 'center',
      },
        formContent: {
          justifyContent: 'center',
          marginLeft: '25px',
          marginRight: '20px',
        },
      input: {
        height: 40,
        margin: 10,
        borderWidth: 1,
        paddingVertical: 28,
        paddingHorizontal:22,
        backgroundColor: '#FFF',
        color: 'rgba(0, 0, 0, 0.49)',
        fontSize: '16px',
        fontWeight: 500,
        borderRadius: '9px',width: '351px'
      },
      textarea: {
        height: 120, 
        margin: 15,
        borderWidth: 1,
        paddingHorizontal: 22,
        paddingVertical:10,
        backgroundColor: '#FFF',
        color: 'rgba(0, 0, 0, 0.49)',
        fontSize: 16,
        fontWeight: '500',
        borderRadius: 9,
        textAlignVertical: 'top',width: '351px'
      },
      picker:{
        height:40, width: '100%', border:'none', fontSize:'16px',fontWeight: 500, marginTop:'-10px'
      },
      checkboxContainer: {
        flexDirection: 'row',
        margin: 'auto',
        gap:'10px',
        width:'100%', maxWidth:'350px'
   
      }, 
      checkbox: {
        alignSelf: 'center',
        width: '39px',
        height: '39px',
        flexShrink: 0
      },
      consent:{
        fontWeight: 500,
        fontSize:'16px',
        lineHeight:'24px',
        color: '#FFF'
      },
      submitButton: {
        backgroundColor: '#F3C147',
        borderRadius: 52.147,
        marginBottom: 80,
        alignItems: 'center',
        justifyContent: 'center',
        height: 50, 
        marginHorizontal: 15,
        width:150,
    },
      submitButtonText: {
        color: '#000',
        fontSize: 18, 
        fontWeight: '500',
        lineHeight:'33.543px',
        fontStyle: 'normal'
      },
  
   
})
export default PersonalLoanForm

  

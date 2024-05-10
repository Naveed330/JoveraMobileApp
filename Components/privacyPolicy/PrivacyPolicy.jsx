import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import HomeNavbar from '../HomeNavbar'

const PrivacyPolicy = () => {
  return (
    <View style={styles.container} >
        <View>
            <HomeNavbar/>
        </View>

        <View style={styles.centeredView} >
            <View style={{marginTop:'70px'}} >
                <Image source={require('../../assets/privacypolicy.png')} />
            </View>

            <View style={styles.textContent}>
                <Text style={{color:'white' , fontSize:'12px', fontWeight:500  }} >This Privacy Policy explains how Jovera Group (“we,” “our,” or “us”) collects, uses, shares, and protects the personal information you provide when using our website. By accessing and using this website, you consent to the practices described in this Privacy Policy.</Text>
                <Text style={{color:'white' , fontSize:'12px', fontWeight:500  , marginTop:'10px' }} >
                <span style={{ fontSize:'12px', fontWeight:'bold' }} >1. Information We Collect:</span> <br />
                 – We may collect personal information, including but not limited to, your name, contact details, email address, and other information you voluntarily provide through our website’s contact forms or subscription services.
                </Text>

                <Text style={{color:'white' , fontSize:'12px', fontWeight:500  , marginTop:'10px' }} >
                <span style={{ fontSize:'12px', fontWeight:'bold' }} >2. Use of Information:</span> <br /> – We use the collected information to respond to your inquiries, provide you with requested information, and improve our services.– We may also use your information to send you promotional materials, updates, and other communications about our services.
                </Text>

                <Text style={{color:'white' , fontSize:'12px', fontWeight:500  , marginTop:'10px' }} >
                <span style={{ fontSize:'12px', fontWeight:'bold' }} >3. Sharing of Information:</span> <br /> – We do not sell, trade, or rent your personal information to third parties.– We may share your information with trusted third-party service providers who assist us in operating our website and delivering services, subject to strict confidentiality agreements.
                </Text>

                <Text style={{color:'white' , fontSize:'12px', fontWeight:500  , marginTop:'10px' }} >
                <span style={{ fontSize:'12px', fontWeight:'bold' }} >4. Cookies and Tracking:</span> <br /> – Our website may use cookies and similar tracking technologies to enhance your user experience, analyse usage patterns, and improve our website’s functionality. You can adjust your browser settings to control the use of cookies.
                </Text>

                <Text style={{color:'white' , fontSize:'12px', fontWeight:500  , marginTop:'10px' }} >
                <span style={{ fontSize:'12px', fontWeight:'bold' }} >5. Data Security:</span> <br />– We take reasonable measures to protect the personal information you provide against unauthorized access, alteration, disclosure, or destruction. <br /> – However, no data transmission over the internet or electronic storage is 100% secure. Therefore, we cannot guarantee the absolute security of your information.
                </Text>

                <Text style={{color:'white' , fontSize:'12px', fontWeight:500  , marginTop:'10px' }} >
                <span style={{ fontSize:'12px', fontWeight:'bold' }} >6. Links to External Sites:</span> <br />– Our website may contain links to external websites. We are not responsible for the content or privacy practices of those sites. We encourage you to review their privacy policies before providing any personal information.
                </Text>

                <Text style={{color:'white' , fontSize:'12px', fontWeight:500  , marginTop:'10px' }} >
                <span style={{ fontSize:'12px', fontWeight:'bold' }} >7. Children’s Privacy:</span> <br /> – Our services are not directed at children under the age of 13. We do not knowingly collect personal information from individuals under 13 years of age.
                </Text>

                <Text style={{color:'white' , fontSize:'12px', fontWeight:500  , marginTop:'10px' }} >
                <span style={{ fontSize:'12px', fontWeight:'bold' }} >8. Changes to Privacy Policy:</span> <br />– We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the updated Privacy Policy will be effective upon posting.
                </Text>

                <Text style={{color:'white' , fontSize:'12px', fontWeight:500  , marginTop:'10px' }} >
                <span style={{ fontSize:'12px', fontWeight:'bold' }} >9. Contact Us:</span> <br />– If you have any questions or concerns about our Privacy Policy, please contact us at [contact]. <br />By using this website, you acknowledge that you have read and understood our Privacy Policy. If you do not agree with our practices, please do not use our website.
                </Text>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.95)',
        overflow:'scroll'
      },
      centeredView: {
        flex: 1,
        justifyContent: 'start',
        alignItems: 'center',
        width:'400px',
        height:'600px',
        flexShrink: 0,
      },
      textContent:{
        paddingHorizontal:'20px', paddingVertical:'20px', display:'flex', justifyContent:'center', alignItems:'center', marginTop:'20px'
      }
    })
export default PrivacyPolicy
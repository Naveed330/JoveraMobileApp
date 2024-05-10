import React from 'react'
import { View, Text,StyleSheet, Image, Pressable } from 'react-native'
import HomeNavbar from '../HomeNavbar'

const ContactUs = () => {
    const Instahandler = () => {}
  return (
    <View style={styles.container}>
        <HomeNavbar/>
        <View style={styles.centeredView} >
            <View style={{marginTop:'30px'}} >
                <Image source={require('../../assets/contactus.png')} />
            </View>

            <View style={{width:'100%', maxWidth:'350px' , marginTop:'25px' }}  >
                <Text style={{color:'#717171' , fontSize:'12px', fontWeight:500, lineSpacing:'-0.32px', lineHeight:'21px' }} >Don’t hesitate to contact us whether you have a suggestion on our improvement, a complain to discuss or an issue to solve.</Text>
            </View>

            {/* <View style={{flexDirection:'row' , gap:'10px', justifyContent:'center', alignItems:'center', marginTop:'20px' }} >
                <View style={styles.callUs}>
                    <Image source={require('../../assets/contactphone.png')} />
                    <Text style={{fontSize:'18px', fontWeight:600, color:'#000', marginTop:'10px' }} >Call Us</Text>
                    <View style={{marginTop:'10px' , width:'100%', maxWidth:'140px',}} >
                         <Text style={{fontSize:'12px', fontWeight:500, color:'#717171',textAlign:'center'}} >Our team is on the line Mon-Sat </Text>
                    </View>
                   
                </View>
                <View style={styles.callUs}>
                        <Image source={require('../../assets/emailus.png')} />
                        <Text style={{fontSize:'18px', fontWeight:600, color:'#000', marginTop:'10px' }} >Email Us</Text>
                        <View style={{marginTop:'10px' , width:'100%', maxWidth:'140px',}} >
                            <Text style={{fontSize:'12px', fontWeight:500, color:'#717171',textAlign:'center'}} >Our team is on the online Mon-Sat </Text>
                        </View>
                </View>
            </View> */}

            {/* <View style={styles.linksbtn} >
                <Pressable style={{flexDirection:'row' , justifyContent:'space-between' }} onPress={Instahandler} >
                    <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center' , gap:'10px' }} >
                        <Image source={require('../../assets/Instagram.png')} />
                        <Image source={require('../../assets/instalogo.png')} />
                    </View>
                    <View>
                        <Image source={require('../../assets/linkbtn.png')} />
                    </View>
                </Pressable>
            </View>

              <View style={styles.linksbtntiktok} >
                <Pressable style={{flexDirection:'row' , justifyContent:'space-between' }} onPress={Instahandler} >
                    <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center' , gap:'10px' }} >
                        <Image source={require('../../assets/tiktok.png')} />
                    </View>
                    <View>
                        <Image source={require('../../assets/linkbtn.png')} />
                    </View>
                </Pressable>
            </View>

             <View style={styles.linksbtntiktok} >
                <Pressable style={{flexDirection:'row' , justifyContent:'space-between' }} onPress={Instahandler} >
                    <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center' , gap:'10px' }} >
                        <Image source={require('../../assets/fblogo.png')} />
                    </View>
                    <View>
                        <Image source={require('../../assets/linkbtn.png')} />
                    </View>
                </Pressable>
            </View>

              <View style={styles.linksbtntiktok} >
                <Pressable style={{flexDirection:'row' , justifyContent:'space-between' }} onPress={Instahandler} >
                    <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center' , gap:'10px' }} >
                        <Image source={require('../../assets/whtsapplogo.png')} />
                    </View>
                    <View>
                        <Image source={require('../../assets/linkbtn.png')} />
                    </View>
                </Pressable>
            </View> */}

            <View style={{marginTop:'20px'}} >
                <Image source={require('../../assets/Locationlogo.png')} />
            </View>

                {/* Abu Dhabi */}
                <View style={{width:'100%' , maxWidth:'300px', marginLeft:'20px', marginRight:'20px',flexDirection:'column' , justifyContent:'center', alignItems:'center'  }} >
                        <View style={{marginTop:'20px', flexDirection:'row' , justifyContent:'center', alignItems:'center' }} >
                            {/* <Image source={require('../../assets/AbuDhabitext.png')} /> */}
                            <Text style={{color:'#000' , fontSize:'18px', fontWeight:'500' }} >Abu Dhabi</Text>
                        </View>
                   
                        <View style={{marginTop:'5px' , position:'relative' }} >
                            <Image style={{width:'300px', height:'150px'}} source={require('../../assets/abudhabi.png')} />
                        </View>

                        <Pressable style={styles.viewlocationbtn} >
                            <Text style={{ fontSize:'10px', fontWeight:700,color: '#000', textAlign:'center' }} >View Location</Text>
                        </Pressable>

                        <Text style={{marginTop:'10px'}} >
                            <a style={{color:'#000'}} href="" target='_blank' >8th Floor, Al Jazira Club Tower A , Al Muroor St , Abu Dhabi, UAE</a>
                        </Text>
                </View>
                {/* Ajman */}
                <View style={{width:'100%' , maxWidth:'300px', marginLeft:'20px', marginRight:'20px',flexDirection:'column' , justifyContent:'center', alignItems:'center'  }} >
                        <View style={{marginTop:'20px', flexDirection:'row' , justifyContent:'center', alignItems:'center' }} >
                            {/* <Image source={require('../../assets/Ajmantext.png')} /> */}
                            <Text style={{color:'#000' , fontSize:'18px', fontWeight:'500' }} >Ajman</Text>
                        </View>
                   
                        <View style={{marginTop:'5px' , position:'relative' }} >
                            <Image style={{width:'300px', height:'150px'}} source={require('../../assets/ajmanbg.png')} />
                        </View>

                        <Pressable style={styles.viewlocationbtn} >
                            <Text style={{ fontSize:'10px', fontWeight:700,color: '#000', textAlign:'center' }} >View Location</Text>
                        </Pressable>

                        <Text style={{marginTop:'10px'}} >
                            <a style={{color:'#000'}} href="" target='_blank' >8th Floor, Al Jazira Club Tower A , Al Muroor St , Abu Dhabi, UAE</a>
                        </Text>
                </View>
                 {/* Sharjah */}
                 <View style={{width:'100%' , maxWidth:'300px', marginLeft:'20px', marginRight:'20px',flexDirection:'column' , justifyContent:'center', alignItems:'center'  }} >
                        <View style={{marginTop:'20px', flexDirection:'row' , justifyContent:'center', alignItems:'center' }} >
                            {/* <Image source={require('../../assets/AbuDhabitext.png')} /> */}
                            <Text style={{color:'#000' , fontSize:'18px', fontWeight:'500' }} >Sharjah</Text>
                        </View>
                   
                        <View style={{marginTop:'5px' , position:'relative' }} >
                            <Image style={{width:'300px', height:'150px'}} source={require('../../assets/abudhabi.png')} />
                        </View>

                        <Pressable style={styles.viewlocationbtn} >
                            <Text style={{ fontSize:'10px', fontWeight:700,color: '#000', textAlign:'center' }} >View Location</Text>
                        </Pressable>

                        <Text style={{marginTop:'10px'}} >
                            <a style={{color:'#000'}} href="" target='_blank' >8th Floor, Al Jazira Club Tower A , Al Muroor St , Abu Dhabi, UAE</a>
                        </Text>
                </View>

                        
                 

            {/* <View style={{marginTop:'30px' , position:'relative' }} >
                <Image source={require('../../assets/locationabudhabi.png')} />

                <Pressable style={styles.viewlocationbtn} >
                    <Text style={{ fontSize:'17px', fontWeight:500,color: '#000', textAlign:'center' }} >View Location</Text>
                </Pressable>
            </View> */}

            {/* <View style={{marginTop:'20px'}} >
                <Image source={require('../../assets/abudhabilocationlogo.png')} />
            </View>

            <View style={{marginTop:'30px' , position:'relative' }} >
                <View>
                    <Image source={require('../../assets/ajmanbranch.png')} />
                </View>

                <Pressable style={styles.viewlocationbtn} >
                    <Text style={{ fontSize:'17px', fontWeight:500,color: '#000', textAlign:'center' }} >View Location</Text>
                </Pressable>
            </View> */}

            {/* <View style={{marginTop:'20px'}} >
                <Image style={{marginBottom:'50px'}} source={require('../../assets/ajmanlocation.png')} />
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
      callUs : {
        width:'165px', height:'165px', backgroundColor:'#DBDBDB', borderRadius:'25px',
        display:'flex', justifyContent:'center', alignItems:'center'
      },
      linksbtn:{
        width:'100%', maxWidth:'320px', marginTop:'30px', borderRadius:'15px', border:'1px solid #A8A8A8',
        paddingHorizontal:'20px', paddingVertical:'15px'
      },
      linksbtntiktok:{
        width:'100%', maxWidth:'320px', marginTop:'10px', borderRadius:'15px', border:'1px solid #A8A8A8',
        paddingHorizontal:'20px', paddingVertical:'15px'
      },
      viewlocationbtn:{
        position: 'absolute',
        top: 120, right:100,
        backgroundColor:'#F3C147', 
        borderRadius:'37px',
        paddingHorizontal:'10px', 
        paddingVertical:'5px'
      }
})
export default ContactUs
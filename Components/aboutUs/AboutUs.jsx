import React from 'react'
import { View, Text, StyleSheet, Image,Dimensions, FlatList,TouchableOpacity } from 'react-native';
import HomeNavbar from '../HomeNavbar'
const {height,width} = Dimensions.get('window')
console.log(height,width,'dimensions');
const AboutUs = () => {

    const images = [
        require('../../assets/CEO.png'),
        require('../../assets/CEO.png'),
        require('../../assets/CEO.png'),
        require('../../assets/CEO.png'),
        require('../../assets/CEO.png'),
        require('../../assets/CEO.png'),
        require('../../assets/CEO.png'),
        // Add more image paths here as needed
      ];

  return (
    <View style={styles.container}>
        <View>
            <HomeNavbar/>
        </View>
        <View style={styles.bgImage} >
             <Image style={{marginTop:'20px'}} source={require('../../assets/Aboutusimage.png')} />
        <View style={styles.AboutUsText} >
            <Text style={{color:'white' , fontSize:'12px', textAlign:'center', fontWeight:500 }} >
                Jovera Group, established in 2013 in the United Arab Emirates (UAE), has swiftly emerged as a prominent player in the real estate and financial services sectors. With a focus on excellence and innovation, the company has grown to become a trusted name in providing tailored solutions to its clients.
            </Text>

            <Text style={{color:'white' , fontSize:'12px', marginTop:'5px', textAlign:'center', fontWeight:500 }} >
               Since its inception, Jovera Group has dedicated itself to offering a comprehensive range of services that cater to the dynamic needs of the UAE market. The company’s expertise spans both real estate and financial domains, allowing it to provide integrated solutions that encompass real estate investments, property management, financial advisory services, and more
            </Text>

            <Text style={{color:'white' , fontSize:'12px', marginTop:'5px', textAlign:'center', fontWeight:500 }} >
            Over the years, Jovera Group has forged strong relationships with clients and partners, guided by its commitment to integrity and client satisfaction. The company’s team of seasoned professionals brings a wealth of experience and knowledge, enabling them to navigate the complexities of both sectors and offer informed advice to clients.
            </Text>

            <Text  style={{color:'white' , fontSize:'12px', marginTop:'5px' , textAlign:'center', paddingBottom:'20px', fontWeight:500}} >
            With a customer-centric approach, Jovera Group remains dedicated to helping individuals and businesses achieve their real estate and financial goals. Its journey since 2013 is marked by growth, innovation, and a relentless pursuit of excellence, making it a prominent player in the UAE’s real estate and financial landscape.
            </Text>
        </View>
        </View>

        {/* <View style={styles.carouselContainer}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          pagingEnabled
          data={images}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => {
            return (
              <View style={styles.carouselItem}>
                <TouchableOpacity style={styles.carouselItemButtons} disabled={true} >
                </TouchableOpacity>
                   
                    <View>
                            <View style={styles.image} >
                                 <Image source={item}style={{width:'150px', height:'150px',borderRadius:'200px' }} />
                            </View>
                            <View>
                                <Text style={{fontSize: '33px', fontWeight:600, color:'#000' , textAlign:'center' }} >CEO</Text>
                                <Text style={{color:'#FFFFFF',fontSize: '20px', fontWeight:500 }} >Eng. Ramy Gerguis</Text>
                            </View>

                        </View>
                   
                    
              </View>
            );
          }}
        />
      </View> */}

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
      },
      bgImage:{
        backgroundColor:'rgba(0, 0, 0, 0.95)',
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        boxShadow:'0px 17px 7.8px 0px rgba(0, 0, 0, 0.47)',
        maxWidth:'380px',
        borderRadius:'13px',
        marginLeft: '20px', 
        marginRight: '20px', 
        marginTop:'20px'
      },
      AboutUsText:{
        marginTop:'20px',
        paddingHorizontal:'10px', lineHeight:'18px'
      },
      carouselContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width:'100%',
        maxWidth:'400px',
        overflow:'scroll',
        marginTop:'60px'
      },
      carouselItem: {
        width: width * 0.9 , // Adjust the width as per your requirement
        height: height / 4, // Adjust the height as per your requirement
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
      },
      carouselItemButtons: {
        width: '100%',
        height: '100%',
        backgroundColor: '#BB9449', position:'relative'
    },
    carousalImages:{
        position:'relative',
        backgroundColor:'white',width:'150px', height:'150px',borderRadius:'200px'
    },
    // image:{
    //     position:'absolute',
    //     top:-300
    // }
        
    })
export default AboutUs
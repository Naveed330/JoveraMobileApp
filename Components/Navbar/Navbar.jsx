import React from 'react';
import { View, Text, Image,StyleSheet } from 'react-native';
const Navbar = () => {
    return (
        <View style={styles.container} >
           <View style={styles.navbar} >
           <Image
                source={require('../../assets/Vector.png')}
            />
            
            <Text style={{ textTransform: 'uppercase', fontWeight: 'bold' }} >Jovera Group</Text>

            <Image
                source={require('../../assets/logo.png')}
            />
           </View>
        </View>
    )
}
         

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.07))',
      },
      navbar : {
        width: '100%',
        maxWidth:'430px',
        height: '95px',
        flexShrink: 0,
        marginTop: '-19px', 
        flexDirection: 'row', 
        alignItems: 'end', 
        justifyContent: 'space-around',
        elevation: 4,
        paddingVertical: 12,
        }
  })


export default Navbar

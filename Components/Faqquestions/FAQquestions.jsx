import React,{useState} from 'react'
import { View, Text, ImageBackground, StyleSheet, Image,ScrollView } from 'react-native'
import HomeNavbar from '../HomeNavbar'
import backgroundImage from '../../assets/faqbg.png'
import { ListItem } from '@rneui/themed';

const FAQquestions = () => {
    const [expanded,setExpanded] = useState(false)
    const [expandedItems, setExpandedItems] = useState({});

    const data = [
        {
            id:0,
            FaqIcon:'../../assets/faqicon.png',
            title:'What financial services does Jovera Group offer?',
            accordianlogo:'../../assets/logo.png',
            accordianText:'Jovera Group offers personal loans, business finance, mortgage services, and real estate assistance.'
        },
        {
            id:1,
            FaqIcon:'../../assets/faqicon.png',
            title:'How can I apply for a personal loan with Jovera Group?',
            accordianlogo:'../../assets/logo.png',
            accordianText:'To apply for a personal loan, simply visit our website or contact our customer service team for assistance.'
        },
        {
            id:2,
            FaqIcon:'../../assets/faqicon.png',
            title:'What types of business finance options are available through Jovera Group?',
            accordianlogo:'../../assets/logo.png',
            accordianText:'Jovera Group offers a range of business finance solutions tailored to meet the specific needs of your business. Please contact us for more information.'
        },
        {
            id:3,
            FaqIcon:'../../assets/faqicon.png',
            title:'Does Jovera Group provide mortgage services?',
            accordianlogo:'../../assets/logo.png',
            accordianText:'Yes, Jovera Group assists clients with mortgage services to help them secure their dream homes or investment properties.'
        },
        {
            id:4,
            FaqIcon:'../../assets/faqicon.png',
            title:'Can Jovera Group help with real estate services?',
            accordianlogo:'../../assets/logo.png',
            accordianText:'Absolutely, Jovera Group offers real estate services to assist clients in buying, selling, or renting properties. Contact us for more details.'
        },
        {
            id:5,
            FaqIcon:'../../assets/faqicon.png',
            title:'How long does the approval process take for a personal loan with Jovera Group?',
            accordianlogo:'../../assets/logo.png',
            accordianText:'The approval process for personal loans depends on various factors. Contact us for a personalized timeline based on your application.'
        },
        {
            id:6,
            FaqIcon:'../../assets/faqicon.png',
            title:'Are there any hidden fees associated with the services provided by Jovera Group?',
            accordianlogo:'../../assets/logo.png',
            accordianText:'Jovera Group is transparent about all fees and charges related to our services. We strive to provide clear and accurate information to our clients.'
        },
        {
            id:7,
            FaqIcon:'../../assets/faqicon.png',
            title:'What sets Jovera Group apart from other financial service providers?',
            accordianlogo:'../../assets/logo.png',
            accordianText:'Jovera Group distinguishes itself through personalized services, competitive rates, and a commitment to customer satisfaction. Our team is dedicated to helping you achieve your financial goals.'
        },
        {
            id:8,
            FaqIcon:'../../assets/faqicon.png',
            title:'How can I get in touch with Jovera Group for more information?',
            accordianlogo:'../../assets/logo.png',
            accordianText:'You can contact Jovera Group through our website, email, or phone. Our customer service team is ready to assist you with any inquiries you may have.'
        },
    ]

    const toggleAccordion = (id) => {
        setExpandedItems((prevExpandedItems) => ({
            ...prevExpandedItems,
            [id]: !prevExpandedItems[id] // Toggle the state of the accordion item with the given id
        }));
    };
    return (
        <View style={styles.container}>
            <HomeNavbar /> 
          <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
            <ScrollView contentContainerStyle={styles.scrollView}>
              <View style={styles.Faqbackground}>
                <Text style={styles.title}>FAQ</Text>
                <View style={styles.faqs}>
                  {data.map((faqData, index) => (
                    <ListItem.Accordion
                      key={faqData.id}
                      content={
                        <ListItem.Content>
                          <View style={styles.question}>
                            <Image source={require('../../assets/faqicon.png')} />
                            <ListItem.Title style={styles.questionText}>{faqData.title}</ListItem.Title>
                          </View>
                        </ListItem.Content>
                      }
                      isExpanded={expandedItems[faqData.id]}
                      onPress={() => toggleAccordion(faqData.id)}
                      containerStyle={styles.accordionContainer}
                    >
                      <ListItem>
                        <ListItem.Content>
                          <View style={styles.answer}>
                            <Image source={require('../../assets/logo.png')} style={styles.answerLogo} />
                            <Text style={styles.answerText}>{faqData.accordianText}</Text>
                          </View>
                        </ListItem.Content>
                      </ListItem>
                    </ListItem.Accordion>
                  ))}
                </View>
              </View>
            </ScrollView>
          </ImageBackground>
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
      },
      scrollView: {
        flexGrow: 1,
      },
      backgroundImage: {
        flex: 8,
        resizeMode: 'cover',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
      },
      Faqbackground: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        paddingHorizontal: '5%',
        paddingVertical: 20,
        alignItems: 'center',
      },
      title: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
      },
      faqs: {
        width: '100%',
        maxWidth: 350,
      },
      question: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
      },
      questionText: {
        fontSize: 14,
        fontWeight: 'bold',
        marginLeft: 10,
      },
      accordionContainer: {
        backgroundColor: '#CCCCCC',
        marginTop: 15,
      },
      answer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
      },
      answerLogo: {
        width: 60,
        height: 60,
        borderRadius: 10,
      },
      answerText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 10,
      },
    });
export default FAQquestions
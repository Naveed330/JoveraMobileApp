import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import HomeNavbar from '../HomeNavbar'

const TermsandConditions = () => {
  return (
    <View style={styles.container} >
        <View>
            <HomeNavbar/>
        </View>

        <View style={styles.centeredView} >
            <View style={{marginTop:'70px'}} >
                <Image source={require('../../assets/termsandconditions.png')} />
            </View>

            <View style={styles.textContent}>
                {/* <Text style={{color:'white' , fontSize:'12px', fontWeight:500  }} >This Privacy Policy explains how Jovera Group (“we,” “our,” or “us”) collects, uses, shares, and protects the personal information you provide when using our website. By accessing and using this website, you consent to the practices described in this Privacy Policy.</Text> */}
                <Text style={{color:'white' , fontSize:'12px', fontWeight:500  , marginTop:'10px' }} >
                <span style={{ fontSize:'12px', fontWeight:'bold' }} >Service Description: </span>
                   Clearly define the services offered by Jovera, including real estate transactions, mortgage brokerage, business finance facilitation, and personal loans.
                </Text>

                <Text style={{color:'white' , fontSize:'12px', fontWeight:500  , marginTop:'10px' }} >
                <span style={{ fontSize:'12px', fontWeight:'bold' }} >Eligibility Criteria:</span> Outline the criteria that individuals or businesses must meet to avail of these services, such as creditworthiness, financial stability, legal requirements, etc.
                </Text>

                <Text style={{color:'white' , fontSize:'12px', fontWeight:500  , marginTop:'10px' }} >
                <span style={{ fontSize:'12px', fontWeight:'bold' }} >Application Process:</span> Detail the steps involved in applying for various services, including required documentation, information, and timelines.
                </Text>

                <Text style={{color:'white' , fontSize:'12px', fontWeight:500  , marginTop:'10px' }} >
                <span style={{ fontSize:'12px', fontWeight:'bold' }} >Interest Rates and Fees:</span> Specify the interest rates, fees, and charges associated with mortgages, business finance, and personal loans. This should include information on any potential changes to these rates over time.
                </Text>

                <Text style={{color:'white' , fontSize:'12px', fontWeight:500  , marginTop:'10px' }} >
                <span style={{ fontSize:'12px', fontWeight:'bold' }} >Loan Terms:</span> Describe the terms and conditions of loans, including repayment schedules, penalties for late payments, prepayment options, etc.
                </Text>

                <Text style={{color:'white' , fontSize:'12px', fontWeight:500  , marginTop:'10px' }} >
                <span style={{ fontSize:'12px', fontWeight:'bold' }} >Property Transactions:</span>  Explain the process of buying, selling, or renting properties through Jovera, including legal obligations, fees, and timelines.
                </Text>

                <Text style={{color:'white' , fontSize:'12px', fontWeight:500  , marginTop:'10px' }} >
                <span style={{ fontSize:'12px', fontWeight:'bold' }} >Confidentiality and Privacy:</span> Ensure that client information is kept confidential and outline the measures taken to protect their privacy. Legal Compliance: Assure clients that Jovera operates in accordance with relevant laws and regulations governing real estate, mortgages, finance, and lending practices.
                </Text>

                <Text style={{color:'white' , fontSize:'12px', fontWeight:500  , marginTop:'10px' }} >
                <span style={{ fontSize:'12px', fontWeight:'bold' }} >Dispute Resolution:</span> Establish procedures for resolving disputes between Jovera and its clients, including arbitration, mediation, or legal action if necessary
                </Text>

                <Text style={{color:'white' , fontSize:'12px', fontWeight:500  , marginTop:'10px' }} >
                <span style={{ fontSize:'12px', fontWeight:'bold' }} >Disclaimer:</span> Include a disclaimer stating that while Jovera strives for accuracy and reliability, it cannot guarantee the completeness or correctness of information provided, and clients should seek professional advice when necessary.
                </Text>

                <Text style={{color:'white' , fontSize:'12px', fontWeight:500  , marginTop:'10px' }} >
                <span style={{ fontSize:'12px', fontWeight:'bold' }} >Amendment Clause: </span> Reserve the right to modify the terms and conditions at any time, with proper notification to clients.
                </Text>

                <Text style={{color:'white' , fontSize:'12px', fontWeight:500  , marginTop:'10px' }} >
                <span style={{ fontSize:'12px', fontWeight:'bold' }} >Contact Information: </span> Provide contact details for clients to reach out for queries, complaints, or assistance regarding the services provided by Jovera.
                </Text>

                <Text style={{color:'white' , fontSize:'12px', fontWeight:500  , marginTop:'10px' }} >
                <span style={{ fontSize:'12px', fontWeight:'bold' }} >Governing Law: </span> Specify the jurisdiction and governing law under which the terms and conditions are interpreted and enforced. Severability: Clarify that if any provision of the terms and conditions is found to be invalid or unenforceable, it will not affect the validity or enforceability of the remaining provisions.
                </Text>

                <Text style={{color:'white' , fontSize:'12px', fontWeight:500  , marginTop:'10px' }} >
                <span style={{ fontSize:'12px', fontWeight:'bold' }} >Waiver: </span> State that any failure by Jovera to enforce any provision of the terms and conditions shall not be considered a waiver of its right to enforce such provision in the future.
                </Text>

                <Text style={{color:'white' , fontSize:'12px', fontWeight:500  , marginTop:'10px' }} >
                <span style={{ fontSize:'12px', fontWeight:'bold' }} >Entire Agreement: </span> Confirm that the terms and conditions constitute the entire agreement between Jovera and its clients, superseding any prior agreements or understandings. It's important for Jovera to ensure that its terms and conditions are clear, fair, and legally sound, protecting both the company and its clients while fostering transparency and trust in its services. Additionally, clients should be given an opportunity to review and acknowledge these terms and conditions before engaging with Jovera's services.
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
export default TermsandConditions
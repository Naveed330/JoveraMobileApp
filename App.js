import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navbar from './Components/Navbar/Navbar';
import Login from './Components/login/Login';
import Register from './Components/Register';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SelectLanguage from './Components/SelectLanguage';
import BusinessFinance from './Components/BusinessFinance';
import Mortgage from './Components/Mortgage';
import './app.css'
import PersonalLoan from './Components/PersonalLoan';
import PersonalLoanForm from './Components/PersonalLoanForm';
import MortgageForm from './Components/MortgageForm';
import BusinessFinanceForm from './Components/BusinessFinanceForm';
import ForgotPassword from './Components/forgotpassword/ForgotPassword';
import OTP from './Components/EmailOTP/OTP';
import PasswordReset from './Components/PasswordReset/PasswordReset';
import SetNewPassword from './Components/SetNewPassword/SetNewPassword';
import PersonalLoans from './Components/PersonalLoanCalculate/PersonalLoansCalculate';
import PersonalLoansCalculate from './Components/PersonalLoanCalculate/PersonalLoansCalculate';
import MortgageCalculation from './Components/mortgageCalculation/MortgageCalculation';
import Dashboard from './Components/dashboard/Dashboard';
import WelcomeScreen from './Components/WelcomeScreen';
import UserProfile from './Components/userProfile/UserProfile';
import UserEditProfile from './Components/userEditProfile/UserEditProfile';
import AboutUs from './Components/aboutUs/AboutUs';
import PrivacyPolicy from './Components/privacyPolicy/PrivacyPolicy';
import TermsandConditions from './Components/terms&conditions/TermsandConditions';
import HelpandSupport from './Components/helpandsupport/HelpandSupport';
import FAQquestions from './Components/Faqquestions/FAQquestions';
import FeedBackForm from './Components/feedBackform/FeedBackForm';
import ContactUs from './Components/contactus/ContactUs';
import Settings from './Components/settings/Settings';
import ProfileIncomplete from './Components/profileIncomplete/ProfileIncomplete';
import Calculator from './Components/Calculator';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <>

      <Stack.Navigator initialRouteName="Calculator">
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="Calculator" component={Calculator} />
        <Stack.Screen name="UserProfile" component={UserProfile} />
        <Stack.Screen name="UserEditProfile" component={UserEditProfile} />
        <Stack.Screen name="AboutUs" component={AboutUs} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="OTP" component={OTP} />
        <Stack.Screen name="PasswordReset" component={PasswordReset} />
        <Stack.Screen name="PersonalLoansCalculate" component={PersonalLoansCalculate} />
        <Stack.Screen name="MortgageCalculation" component={MortgageCalculation} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="SelectLanguage" component={SelectLanguage} />
        <Stack.Screen name="BusinessFinance" component={BusinessFinance} />
        <Stack.Screen name="Mortgage" component={Mortgage} />
        <Stack.Screen name="PersonalLoan" component={PersonalLoan} />
        <Stack.Screen name="PersonalLoanForm" component={PersonalLoanForm} />
        <Stack.Screen name="MortgageForm" component={MortgageForm} />
        <Stack.Screen name="BusinessFinanceForm" component={BusinessFinanceForm} />
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
        <Stack.Screen name="TermsandConditions" component={TermsandConditions} />
        <Stack.Screen name="HelpandSupport" component={HelpandSupport} />
        <Stack.Screen name="FAQquestions" component={FAQquestions} />
        <Stack.Screen name="FeedBackForm" component={FeedBackForm} />
        <Stack.Screen name="ContactUs" component={ContactUs} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="ProfileIncomplete" component={ProfileIncomplete} />
      </Stack.Navigator>
    

    </>
  );
}



import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export const Login = ({navigation}) => {
  const EMAIL_REGEX_PATTERN = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const [InputData, setInputData] = useState({
    email: '',

    password: '',
  });
  const handleOnChange = (name, value) => {
    setInputData({...InputData, [name]: value});
    setInputDataError({...InputDataError, [`${name}Error`]: false});
  };
  const [InputDataError, setInputDataError] = useState({
    emailError: false,
    passwordError: false,
  });

  const validate = () => {
    if (
      InputData.email == '' ||
      EMAIL_REGEX_PATTERN.test(InputData.email) == false
    ) {
      setInputDataError({
        ...InputDataError,
        emailError: true,
      });
    } else if (InputData.password == '') {
      setInputDataError({
        ...InputDataError,
        passwordError: true,
      });
    }
  };
  return (
    <View style={styles.mainContainer}>
      <View style={{marginVertical: '60%'}}>
        {InputDataError ? (
          <TextInput
            placeholder={'lakshmi@wovvtech.com'}
            style={styles.inputField}
            placeholderTextColor="white"
            onChangeText={text => handleOnChange('firstName', text.trim())}
          />
        ) : (
          <Text style={{color: 'red'}}>eroor</Text>
        )}
        <View style={{marginVertical: '7%'}}>
          <TextInput
            placeholder={'Password'}
            style={styles.inputField}
            placeholderTextColor="white"
            secureTextEntry={true}
          />
        </View>
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => navigation.navigate('dashboard')}>
          <Text style={styles.btntext}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  errorText: {
    fontSize: 12,
    marginTop: 5,
    alignSelf: 'center',
    //marginLeft: horizontalScale(30),
  },
  inputField: {
    borderBottomWidth: 1,
    opacity: 0.5,
    marginVertical: Platform.OS == 'ios' ? '4%' : null,
    borderBottomColor: 'red',
    color: 'white',
    marginHorizontal: '5%',
  },
  mainContainer: {
    backgroundColor: 'black',
    height: '100%',
  },
  loginBtn: {
    width: '80%',
    height: '19%',
    backgroundColor: 'red',
    textAlign: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginHorizontal: '10%',
    marginVertical: Platform.OS == 'ios' ? '2%' : '7%',
  },
  btntext: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
});

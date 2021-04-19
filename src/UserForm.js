import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import {createUser} from './store/Action/UserAction';
const UserForm = ({setTable, createUser}) => {
  const [name, setName] = useState([]);
  const [userName, setUserName] = useState([]);
  const [final, setFinal] = useState([]);
  const val = {name: 'lakshmi'};

  const handleChange = event => {
    console.log('textInput', event);
    setName(event);
  };
  const handleChange1 = event => {
    console.log('textInput', event);
    setUserName(event);
  };
  const createlocaluser = () => {
    setFinal([...final, {name, userName}]);
    createUser([...final, {name, userName}]);
  };

  return (
    <View>
      <View style={{marginVertical: '2%'}}>
        <TextInput
          style={styles.textContainer}
          placeholder="Name"
          onChangeText={event => handleChange(event)}
        />
      </View>
      <View style={{marginVertical: '2%'}}>
        <TextInput
          style={styles.textContainer}
          placeholder="userName"
          onChangeText={event => handleChange1(event)}
        />
      </View>

      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => {
          setTable(true);
          createlocaluser();
        }}>
        <Text style={styles.btntext}>ADD</Text>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = state => ({users: state.users});

export default connect(mapStateToProps, {createUser})(UserForm);
const styles = StyleSheet.create({
  textContainer: {
    borderColor: 'black',
    borderWidth: 1,
    marginHorizontal: '10%',
  },
  button: {
    marginHorizontal: '30%',
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

import React from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';
import {deleteUser} from '../src/store/Action/UserAction';
import {connect} from 'react-redux';
const UserTable = ({users, deleteUser}) => {
  console.log('inside users', users);
  return (
    <View>
      <View style={styles.container}>
        <Text>Name</Text>
        <Text>UserName</Text>
        <Text>Actions</Text>
      </View>
      {users &&
        users.user.map(item => {
          return (
            <View style={styles.container}>
              <Text>{item.name}</Text>
              <Text>{item.userName}</Text>
              <View>
                <Button title="delete" onPress={() => deleteUser(item.name)} />
              </View>
            </View>
          );
        })}
    </View>
  );
};

const mapStateToProps = state => ({users: state.users});

export default connect(mapStateToProps, {deleteUser})(UserTable);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

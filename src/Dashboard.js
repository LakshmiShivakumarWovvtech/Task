import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import UserForm from './UserForm';
import UserTable from './UserTable';
import {connect} from 'react-redux';
const Dashboard = users => {
  const [table, setTable] = useState(false);
  console.log('users are', users);
  return (
    <View>
      <View>
        <Text style={{fontWeight: 'bold'}}>Add Users</Text>
        <UserForm setTable={setTable} />
      </View>
      {table && (
        <View>
          <Text style={{fontWeight: 'bold'}}>View Users</Text>
          <UserTable />
        </View>
      )}
    </View>
  );
};
const mapStateToProps = state => ({users: state.users});

export default connect(mapStateToProps, {})(Dashboard);

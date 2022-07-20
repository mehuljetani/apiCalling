import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {updateUser} from '../redux/action';

const UpdateScreen = ({route}) => {
  console.log('route', route?.params?.item);
  const item = route?.params?.item;

  const dispatch = useDispatch();

  const [name, setName] = useState(item.name);
  const [email, setEmail] = useState(item.email);

  const userDetail = {
    name: name,
    email: email,
  };

  const onUpdatePress = () => {
    dispatch(updateUser(userDetail));
  };

  return (
    <View
      style={{marginTop: 90, justifyContent: 'center', alignItems: 'center'}}>
      <Text>UpdateScreen</Text>

      <TextInput value={name} onChangeText={val => setName(val)} />
      <TextInput value={email} onChangeText={email => setEmail(email)} />
      <Button title="Update" color={'blue'} onPress={onUpdatePress} />
    </View>
  );
};

export default UpdateScreen;

const styles = StyleSheet.create({});

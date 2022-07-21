import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import UserScreen from '../screens/UserScreen';

const Stack = createNativeStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, statusBarColor: 'gray'}}>
      <Stack.Screen component={UserScreen} name={'UserScreen'} />
    </Stack.Navigator>
  );
};

export default StackNav;

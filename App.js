import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import StackNav from './src/navigation/StackNav';
import {Provider} from 'react-redux';
import store from './src/redux/store/store';

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <StackNav />
      </Provider>
    </NavigationContainer>
  );
};

export default App;

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigation from '../src/navigation/MainNavigation';
import { Provider } from 'react-redux';
import store from '../src/redux/store';
import 'react-native-reanimated';

export default function Index() {
  return (
    <Provider store={store}>
      <NavigationContainer independent={true}>
        <MainNavigation />
      </NavigationContainer>
    </Provider>
  );
}

import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import Home from '../container/Home';
import Comments from '../container/Comments';
import AddUser from '../container/AddUser';

const AppStack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator>
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="Comments" component={Comments} />
        <AppStack.Screen name="AddUser" component={AddUser} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

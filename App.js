import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AppLoading from 'screens/AppLoading';
import Slots from 'screens/Slots';
import GameFrame from 'screens/GameFrame';
import Faq from 'screens/Faq';

const Stack = createStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="GameFrame">
          <Stack.Screen
            name="AppLoading"
            component={AppLoading}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Slots"
            component={Slots}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="GameFrame"
            component={GameFrame}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Faq"
            component={Faq}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;

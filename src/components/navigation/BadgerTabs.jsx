import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InfoStack from "./InfoStack";
import { useState } from 'react';
import MatchInfoScreen from '../screens/MatchInfoScreen';
import ProfileScreen from '../screens/ProfileScreen';



function BadgerTabs() {

    const infoStack = createNativeStackNavigator();
    const BottomTab = createBottomTabNavigator();
    const [isFirstTime, setIsFirstTime] = useState(true);

    return <>
        <BottomTab.Navigator>
            <BottomTab.Screen name="Profile" component={ProfileScreen} options={{headerShown: false}}/>
            <BottomTab.Screen name="Match" component={MatchInfoScreen} options={{headerShown: false}}/>
            {/* <BottomTab.Screen name="Preferences" component={BadgerPreferencesScreen}/> */}
        </BottomTab.Navigator>
    </>



    // const Stack = createStackNavigator();

    // return <>
    //     <Stack.Navigator initialRouteName="Login">
    //         <Stack.Screen
    //             name="Login"
    //             component={LoginScreen}
    //             options={{headerShown: false}}
    //         />
    //         <Stack.Screen
    //             name="SignUp"
    //             component={SignUpScreen}
    //             options={{headerShown: false}}
    //         />
    //     </Stack.Navigator>
    // </>
}

export default BadgerTabs;
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PersonalInfoScreen from "../screens/PersonalInfoScreen";
import MatchInfoScreen from "../screens/MatchInfoScreen";
// import BadgerTabs from "./BadgerTabs";



export default function NewsFeedStack() {

  const infoStack = createNativeStackNavigator();

  return <>
    <infoStack.Navigator>
        <infoStack.Screen name="User Information" component={PersonalInfoScreen} options={{headerShown: true}}/>
        <infoStack.Screen name="Preferences" component={MatchInfoScreen} options={{headerShown: true, headerBackTitleVisible: false}}/>
      </infoStack.Navigator>
    </>;
}

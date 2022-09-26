import Home from "./home/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Setting from "./setting/Setting";
import Icon from "react-native-vector-icons/Ionicons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Ionicons from "@expo/vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

const Drawer = createDrawerNavigator();
export default function Dashboard({ navigation }) {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="HOME"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ tintColor }) => (
            <Ionicons name="home" size={25} color={tintColor} />
          ),
        }}
      />
      <Tab.Screen
        name="SETTING"
        component={Setting}
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-settings" color={tintColor} size={25} />
          ),
        }}
      />
    </Tab.Navigator>

    // <Drawer.Navigator
    //   initialRouteName="HOME"
    //   screenOptions={{ headerShown: false }}
    // >
    //   <Drawer.Screen name="HOME" component={Home} />
    //   <Drawer.Screen name="SETTING" component={Setting} />
    // </Drawer.Navigator>
  );
}

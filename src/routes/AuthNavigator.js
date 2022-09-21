import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Dashboard, Login, Registration } from "../screens";
const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="LOGIN" component={Login} />
      <Stack.Screen name="REGISTRATION" component={Registration} />
      <Stack.Screen name="DASHBOARD" component={Dashboard} />
    </Stack.Navigator>
  );
}

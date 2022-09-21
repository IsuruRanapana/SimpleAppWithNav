import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect } from "react";
import Spinner from "react-native-loading-spinner-overlay";
import { useDispatch, useSelector } from "react-redux";
import {
  authScreens,
  dashboardScreens,
} from "../features/screenNavigation/screenNavigationSlice";
import { getData } from "../helpers/asyncStorageHelper";
import { Dashboard, Login, Registration } from "../screens";
import Splash from "../screens/splash/Splash";
const Stack = createNativeStackNavigator();

export default function Navigator() {
  const isLoading = false;

  const screener = useSelector((state) => state.screener.value);
  const dispatch = useDispatch();

  const checkIsLoggedIn = async () => {
    const loggedInStatus = await getData({ key: "loggedin" });
    console.log(loggedInStatus);
    if (loggedInStatus === "true") {
      dispatch(dashboardScreens);
    } else {
      dispatch(authScreens);
    }
  };

  useEffect(async () => {
    console.log(screener);
    const ab = await checkIsLoggedIn();
  });
  checkIsLoggedIn();
  if (screener === "splash") {
    return <Spinner visible={true} />;
  }
  return (
    <Stack.Navigator>
      {screener === "splash" ? (
        <Stack.Screen name="SPLASH" component={Splash} />
      ) : screener === "dashboard" ? (
        <>
          <Stack.Screen name="DASHBOARD" component={Dashboard} />
          <Stack.Screen name="LOGIN" component={Login} />
          <Stack.Screen name="REGISTRATION" component={Registration} />
        </>
      ) : (
        <>
          <Stack.Screen name="LOGIN" component={Login} />
          <Stack.Screen name="REGISTRATION" component={Registration} />
          <Stack.Screen name="DASHBOARD" component={Dashboard} />
        </>
      )}

      {/* {checkIsLoggedIn() ? (
        <>
          <Stack.Screen name="DASHBOARD" component={Dashboard} />
          <Stack.Screen name="LOGIN" component={Login} />
          <Stack.Screen name="REGISTRATION" component={Registration} />
        </>
      ) : (
        <>
          <Stack.Screen name="LOGIN" component={Login} />
          <Stack.Screen name="REGISTRATION" component={Registration} />
          <Stack.Screen name="DASHBOARD" component={Dashboard} />
        </>
      )} */}
    </Stack.Navigator>
  );
}

import { View, Text } from "react-native";
import { getDataObject, storeData } from "../../../helpers/asyncStorageHelper";
import styles from "./Home.styles";
import { Button } from "../../../components";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "react-native-loading-spinner-overlay";
import {
  loaded,
  loading,
} from "../../../features/loadingSpinner/loadingSpinnerSlice";
import { NavigationContainer, useIsFocused } from "@react-navigation/native";
import { useEffect, useState, useCallback } from "react";
import { authFlow } from "../../../features/auth/authSlice";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

export default function Home({ navigation }) {
  const [fontsLoaded] = Font.useFonts({
    "Inter-Black": require("../../../../assets/fonts/Inter-BlackItalic.otf"),
  });
  const loader = useSelector((state) => state.loader.value);
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  // useEffect(() => {
  //   async function prepare() {
  //     await SplashScreen.preventAutoHideAsync();
  //   }
  //   prepare();
  // }, []);

  // const onLayoutRootView = useCallback(async () => {
  //   if (fontsLoaded) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded]);
  // if (!fontsLoaded) {
  //   return null;
  // }

  useEffect(() => {
    getUser();
  }, [isFocused]);

  const [user, setUser] = useState({});

  const getUser = async () => {
    dispatch(loading());
    const userDetails = await getDataObject({ key: "userObj" });
    setUser(userDetails);
    dispatch(loaded());
  };

  const handleOnPress = async () => {
    await storeData({ key: "loggedin", value: "false" });
    dispatch(authFlow());
  };
  const handleOpenDrawer = async () => {
    navigation.openDrawer();
  };
  return (
    <View style={styles.container}>
      <Spinner visible={loader} textContent={"Loading ..."} />

      <Text style={styles.text}>{`Hi ${user.username}`}</Text>
      <Text style={{ fontFamily: "Inter-Black" }}>{"You Are In"}</Text>
      <Button labelText={"Logout"} onPress={handleOnPress} />
      <Button labelText={"Open Drawer"} onPress={handleOpenDrawer} />
    </View>
  );
}

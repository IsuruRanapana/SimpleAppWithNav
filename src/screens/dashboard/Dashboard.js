import { View, Text } from "react-native";
import { getDataObject, storeData } from "../../helpers/asyncStorageHelper";
import styles from "./Dashboard.styles";
import { Button } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import {
  loaded,
  loading,
} from "../../features/loadingSpinner/loadingSpinnerSlice";
import { useIsFocused } from "@react-navigation/native";
import { useEffect, useState } from "react";

export default function Dashboard({ navigation }) {
  const loader = useSelector((state) => state.loader.value);
  const dispatch = useDispatch();
  const isFocused = useIsFocused();

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
    navigation.navigate("LOGIN");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{`Hi ${user.username}`}</Text>
      <Button labelText={"Logout"} onPress={handleOnPress} />
    </View>
  );
}

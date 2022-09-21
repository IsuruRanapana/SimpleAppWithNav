import { View, Text } from "react-native";
import { storeData } from "../../helpers/asyncStorageHelper";
import styles from "./Splash.styles";
import { Button } from "../../components";

export default function Splash({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Splash</Text>
    </View>
  );
}

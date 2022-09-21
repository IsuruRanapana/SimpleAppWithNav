import { useEffect, useState } from "react";
import { NavigationContainer, ThemeProvider } from "@react-navigation/native";
import Navigator from "./src/routes/PrimaryNavigator";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "./src/app/store";
import { useColorScheme } from "react-native";
import { ThemeContext } from "./src/contexts/themeContext";
import {
  loaded,
  loading,
} from "./src/features/loadingSpinner/loadingSpinnerSlice";
import DashboardNavigator from "./src/routes/DashboardNavigator";
import AuthNavigator from "./src/routes/AuthNavigator";

const lightTheme = {
  background: "#F8F8F8",
};

const darkTheme = {
  background: "#645CAA",
};

export default function App() {
  const colorScheme = useColorScheme();
  const [theme, setTheme] = useState(
    colorScheme === "light" ? lightTheme : darkTheme
  );

  useEffect(() => {
    setTheme(colorScheme === "light" ? lightTheme : darkTheme);
  }, [colorScheme]);

  // const loader = useSelector((state) => state.loader.value);
  // const dispatch = useDispatch();

  // const navigateToPages = async () => {
  //   dispatch(loading());
  //   const loggedInStatus = await getData({ key: "loggedin" });
  //   if (loggedInStatus === "true") {
  //     dispatch(loaded());
  //     return <DashboardNavigator />;
  //   } else {
  //     dispatch(loaded());
  //     return <AuthNavigator />;
  //   }
  // };
  return (
    <Provider store={store}>
      <ThemeContext.Provider value={{ theme }}>
        <NavigationContainer>
          <AuthNavigator />
        </NavigationContainer>
      </ThemeContext.Provider>
    </Provider>
  );
}

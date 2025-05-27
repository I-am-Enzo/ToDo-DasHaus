import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import { Image } from "react-native";
import Logo from "../assets/Logo haus sem fundo.png";

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: () => (
              <Image
                source={Logo}
                style={{ width: 140, height: 70, resizeMode: "contain" }}
              />
            ),
            headerTitleAlign: "center", //
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

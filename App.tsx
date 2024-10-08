import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./pages/Home";
import ProductsList from "./pages/ProductsList";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Avalie Aqui" }}
        />
        <Stack.Screen 
          name="ProductsList"
          component={ProductsList}
          options={{ title: "Lista de produtos" }} />
        {/* <Stack.Screen name="Plantae" component={Plantas} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

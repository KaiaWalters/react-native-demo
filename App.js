import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import ComponentScreen from "./src/screens/ComponentScreen";
import HomeScreen from "./src/screens/HomeScreen";
import ImageScreen from "./src/screens/ImageScreen";
import ListScreen from "./src/screens/ListScreen";
import CounterScreen from "./src/screens/CounterScreen";
import ColorScreen from "./src/screens/ColorScreen";
import ColorPicker from "./src/screens/ColorPicker";
  
const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentScreen,
    List: ListScreen,
    Images: ImageScreen, 
    Counter: CounterScreen,
    Color: ColorScreen,
    Picker: ColorPicker 
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);

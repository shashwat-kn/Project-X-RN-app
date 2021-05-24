import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from "react-navigation-stack"
import HomeScreen from './Screens/HomeScreen';
import CameraScreen from './Screens/CameraScreen'

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Camera: CameraScreen
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(AppNavigator)

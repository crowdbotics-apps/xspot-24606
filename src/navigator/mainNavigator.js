import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings207232Navigator from '../features/Settings207232/navigator';
import UserProfile207225Navigator from '../features/UserProfile207225/navigator';
import Settings207224Navigator from '../features/Settings207224/navigator';
import Settings207222Navigator from '../features/Settings207222/navigator';
import SignIn2207220Navigator from '../features/SignIn2207220/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings207232: { screen: Settings207232Navigator },
UserProfile207225: { screen: UserProfile207225Navigator },
Settings207224: { screen: Settings207224Navigator },
Settings207222: { screen: Settings207222Navigator },
SignIn2207220: { screen: SignIn2207220Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;

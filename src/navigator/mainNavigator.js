import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen211591Navigator from '../features/BlankScreen211591/navigator';
import CopyOfBlankScreen011590Navigator from '../features/CopyOfBlankScreen011590/navigator';
import BlankScreen011589Navigator from '../features/BlankScreen011589/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen211591: { screen: BlankScreen211591Navigator },
CopyOfBlankScreen011590: { screen: CopyOfBlankScreen011590Navigator },
BlankScreen011589: { screen: BlankScreen011589Navigator },

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

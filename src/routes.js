import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Main from './pages/Main';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
    },
    {
      headerLayoutPreset: 'center',
      headerBackTitleVisible: false,
      defaultNavigationOptions: {
        headerTitle: 'FinApp',
        headerStyle: {
          backgroundColor: '#9F70C5',
        },
        headerTintColor: '#fff',
      },
    }
  )
);

export default Routes;

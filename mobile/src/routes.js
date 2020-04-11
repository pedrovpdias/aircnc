import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from './pages/Login';
import Booking from './pages/Booking';
import Spots from './pages/Spots';

const Routes = createAppContainer(
    createSwitchNavigator({
        Login,
        Booking,
        Spots,
    }) 
);

export default Routes;
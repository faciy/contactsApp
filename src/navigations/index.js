import React, {useContext} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
import HomeNavigator from './HomeNavigator';
import DrawerNavigator from './DrawerNavigator';
import { GlobalContext } from '../context/Provider';

const AppNavContainer = () => {

    const {authState:{isLoadingIn}} = useContext(GlobalContext);

    console.log('state', isLoadingIn)

    return (
        <NavigationContainer>
            {isLoadingIn ? <DrawerNavigator /> :  <AuthNavigator />}
        </NavigationContainer>
    )
}

export default AppNavContainer;

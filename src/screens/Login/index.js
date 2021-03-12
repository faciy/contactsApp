import React from 'react';
import {
    View,
    Text,
    TextInput,
    ScrollView
} from 'react-native';
import LoginComponent from '../../components/Login';

const Login = () =>{

    const [value, onChangeText] = React.useState('');

    return(
        <ScrollView>
            <LoginComponent />
        </ScrollView>
    )
}

export default Login;
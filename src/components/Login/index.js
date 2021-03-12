import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Container from '../../components/common/Container';
import CustomButton from '../../components/common/CustomButton';
import Input from '../../components/common/Input';
import image from '../../assets/images/image.png';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { REGISTER} from '../../constants/routeNames';

const LoginComponent = () => {
    const navigation = useNavigation();
    return (
            <Container>
                <Image style={styles.logoImage} source={image}/>
            <View>
                    <Text style={styles.title}>Welcome to Contacts</Text>
                    <Text style={styles.subTitle}>Please login here</Text>
                    <Input
                    label="Username"
                    placeholder="Enter Username"
                    // icon={<Text>HIDE</Text>}
                    iconPosition="right"
                    // error={'This field is required'}
                    />

                    <Input
                    label="Password"
                    secureTextEntry={true}
                    placeholder="Enter Password"
                    icon={<Text>Show</Text>}
                    iconPosition="right"
                    />
                <CustomButton primary  title="Submit" />
                <View style={styles.createSection}>
                    <Text style={styles.infoText}>Need a new account ?</Text>
                    <TouchableOpacity onPress={() =>{navigation.navigate(REGISTER)}}>
                        <Text style={styles.linkBtn}>Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Container>
    )
}

export default LoginComponent;

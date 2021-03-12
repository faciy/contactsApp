import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Container from '../../components/common/Container';
import CustomButton from '../../components/common/CustomButton';
import Input from '../../components/common/Input';
import image from '../../assets/images/image.png';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { LOGIN} from '../../constants/routeNames';

const RegisterComponent = ({onSubmit, onChange, form, erros, error, loading}) => {
    // console.log('errosOne', error.error)
    const navigation = useNavigation();
    return (
            <Container>
                <Image style={styles.logoImage} source={image}/>
            <View>
                    <Text style={styles.title}>Welcome to Contacts</Text>
                    <Text style={styles.subTitle}>Create a free account</Text>
                    {/* {error.error && <Text>{error.error}</Text> } */}
                    <Input
                    label="Username"
                    placeholder="Enter Username"
                    // icon={<Text>HIDE</Text>}
                    iconPosition="right"
                    onChangeText={(value) => onChange({name:'userName',value})}
                    error={erros.userName|| error?.username?.[0]}
                    />
                     <Input
                    label="First Name"
                    placeholder="Enter First Name"
                    // icon={<Text>HIDE</Text>}
                    iconPosition="right"
                    onChangeText={(value) => onChange({name:'firstName',value})}
                    error={erros.firstName}
                    />
                     <Input
                    label="Last Name"
                    placeholder="Enter Last Name"
                    // icon={<Text>HIDE</Text>}
                    iconPosition="right"
                    onChangeText={(value) => onChange({name:'lastName',value})}
                    error={erros.lastName}
                    />
                     <Input
                    label="Email"
                    placeholder="Enter Email"
                    // icon={<Text>HIDE</Text>}
                    iconPosition="right"
                    onChangeText={(value) => onChange({name:'email',value})}
                    error={erros.email}
                    />

                    <Input
                    label="Password"
                    secureTextEntry={true}
                    placeholder="Enter Password"
                    icon={<Text>Show</Text>}
                    iconPosition="right"
                    onChangeText={(value) => onChange({name:'password',value})}
                    error={erros.password}
                    />
                    {console.log('error', error)}
                <CustomButton disabled={loading} loading={loading} onPress={onSubmit} primary  title="Submit" />
                <View style={styles.createSection}>
                    <Text style={styles.infoText}>Already have connect ?</Text>
                    <TouchableOpacity onPress={() =>{navigation.navigate(LOGIN)}}>
                        <Text style={styles.linkBtn}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Container>
    )
}

export default RegisterComponent;

import {
    StyleSheet
} from 'react-native';
import colors from '../../assets/theme/colors';

export default StyleSheet.create({
    logoImage:{
        alignSelf:'center',
        marginTop:50
    },
    title:{
        fontSize:30,
        textAlign:'center',
        paddingTop:20,
        fontWeight:'500'
    },
    subTitle:{
        fontSize:20,
        textAlign:'center',
        paddingVertical:20,
        fontWeight:'500'
    },
    createSection:{
        flexDirection:'row',
    }, 
    linkBtn:{
        paddingLeft:12,
        color:colors.primary,
        fontSize:16
    },
    infoText:{
        fontSize:17
    }
})
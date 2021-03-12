import React from 'react'
import { View, Text } from 'react-native'
import styles from '../Container/styles';

const Container = ({children}) => {
    return (
        <View style={styles.wrapper}>
            {children}
        </View>
    )
}

export default Container;

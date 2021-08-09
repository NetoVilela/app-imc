import React from 'react'
import {View, Text} from 'react-native'

import styles from'./style'

export default function ResultIMC(props){
    const {resultImc, messageResultIMC} = props;
    return(
        <View style={styles.resultbox}>
            <Text style={styles.textResult}>{resultImc !=null ? messageResultIMC : ''}</Text>
            <Text style={styles.result}>{resultImc}</Text>
        </View>
    )
}
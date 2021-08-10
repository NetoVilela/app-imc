import React from 'react'
import {View, Text, TouchableOpacity, Share, Touchable} from 'react-native'

import styles from'./style'

export default function ResultIMC(props){
    const {resultImc, messageResultIMC} = props;

    const onShare = async () =>{
        const result = await Share.share({
            message: "Meu IMC hoje é: "+resultImc,
        })
    }

    return(
        <View style={styles.resultbox}>
            <Text style={styles.textResult}>{resultImc !=null ? messageResultIMC : ''}</Text>
            <Text style={styles.result}>{resultImc}</Text>
            <View style={styles.boxShareButton}>
                {resultImc != null ? 
                <TouchableOpacity 
                onPress={onShare}
                style={styles.shared}>
                    <Text style={styles.sharedText}>Share</Text>
                </TouchableOpacity>
                : <View />
                }
            </View>
        </View>
    )
}
import React, {useState} from 'react'
import {
    View,
    Text, 
    TextInput, 
    TouchableOpacity,
    Vibration,
    ScrollView,
    SafeAreaView,
    Keyboard,
    Pressable
} from 'react-native'

import ResultIMC from './ResultIMC/';

import styles from './style'


export default function Form(){

    const [altura, setAltura] = useState(null)
    const [peso, setPeso] = useState(null)
    const [messageImc, setMessageImc] = useState('Preencha o peso e altura')
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState('Calcular')
    const [errorMessageP, setErrorMessageP] = useState(null)
    const [errorMessageA, setErrorMessageA] = useState(null)

    const verification_imc = () =>{
        peso==null ? (setErrorMessageP('Campo obrigatório*'), Vibration.vibrate()) : setErrorMessageP(null)
        altura==null ? (setErrorMessageA('Campo obrigatório*'), Vibration.vibrate()) : setErrorMessageA(null)
    }

    const imc_calculator = () =>{
       return setImc((peso/(altura*altura)).toFixed(2))
    }

    const validator_imc = () =>{
        if(altura != null && peso != null){
            imc_calculator()
            setMessageImc("Seu IMC é igual a ")
            setTextButton('Calcular novamente')
            setAltura(null)
            setPeso(null)
            setErrorMessageP(null)
            setErrorMessageA(null)
        }else{
            setTextButton('Preencha o peso e altura')
            verification_imc()
        }
    }

    return(
        <Pressable onPress={Keyboard.dismiss} style={styles.formContext}>
           <View style={styles.form}>
               <Text style={styles.label}>Altura (m)</Text>
               <Text style={styles.errorMessage}>{errorMessageA}</Text>
               <TextInput 
                style={styles.input}
                onChangeText = {setAltura}
                value ={altura}
                placeholder="Ex. 1.75"
                keyboardType="numeric"/>

               <Text style={styles.label}>Peso (kg)</Text>
               <Text style={styles.errorMessage}>{errorMessageP}</Text>
               <TextInput 
               style={styles.input}
               onChangeText = {setPeso}
               value = {peso}
               placeholder="Ex. 88.55"
               keyboardType="numeric"/>
        
                <TouchableOpacity 
                    onPress={()=> validator_imc()} 
                    style={styles.buttonCalculator}> 
                    <Text style={styles.textButtonCalculator}>{textButton}</Text>    
                </TouchableOpacity>
                <ResultIMC messageResultIMC = {messageImc} resultImc={imc} />
           </View>
        </Pressable>
    )
}
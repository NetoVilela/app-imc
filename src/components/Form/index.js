import React, {useState} from 'react'
import {View, Text, TextInput, Button} from 'react-native'

import ResultIMC from './ResultIMC/';

export default function Form(){

    const [altura, setAltura] = useState(null)
    const [peso, setPeso] = useState(null)
    const [messageImc, setMessageImc] = useState('Preencha o peso e altura')
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState('Calcular')

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
        }else{
            setImc(null)
            setTextButton('Preencha o peso e altura')
        }
    }

    return(
        <View>
           <View>
               <Text>Altura</Text>
               <TextInput 
                onChangeText = {setAltura}
                value ={altura}
                placeholder="Ex. 1.75"
                keyboardType="numeric"/>

               <Text>Peso</Text>
               <TextInput 
               onChangeText = {setPeso}
               value = {peso}
               placeholder="Ex. 88.55"
               keyboardType="numeric"/>
        
                <Button
                title={textButton}
                onPress={()=> validator_imc()}
                />

                <ResultIMC messageResultIMC = {messageImc} resultImc={imc} />
           </View>
        </View>
    )
}
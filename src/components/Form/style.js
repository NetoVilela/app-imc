import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    formContext:{
        width: "100%",
        height: "90%",
        bottom: 0,
        backgroundColor: "#FFF",  
        borderRadius:30,
        marginTop: 20,
        // justifyContent: 'space-around',
        // paddingTop: 15,
    },
    form:{
        width: "100%",
        height: "auto",
        marginTop: 30,
        // padding: 10,
    },
    label:{
        color: "#000",
        fontSize: 18,
        paddingLeft: 20,
    },
    input:{
        backgroundColor: "#F6F6F6",
        width: "90%",
        height: 40,
        margin: 12,
        paddingLeft: 10,
        borderRadius: 50,
        color: "#000",
    },
    buttonCalculator:{
        backgroundColor: "#ff0043",
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        width: "90%",
        paddingTop: 14,
        paddingBottom: 14,
        marginLeft: 12,
        marginTop: 30,

    },
    textButtonCalculator:{
        fontSize: 20,
        color: "#FFF",
    },
    errorMessage:{
        fontSize: 12,
        color: 'red',
        fontWeight: 'bold',
        paddingLeft: 20,
    }
});

export default styles;
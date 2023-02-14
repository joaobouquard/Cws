import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import entry from '../entry';


export default function App() {

    const navi = useNavigation();

    function GoToEntry() {
        navi.navigate(entry)
    };

    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/logocws.png')} style={styles.logo} />
            <View style={styles.buttons}>
                <TouchableOpacity style={styles.btn} onPress={GoToEntry}>
                    <View style={styles.button}>
                        <Text style={styles.textBtn}>Nova Check List</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                    <View style={styles.button}>
                        <Text style={styles.textBtn}>Pesquisar</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                    <View style={styles.button}>
                        <Text style={styles.textBtn}>Excluir</Text>
                    </View>
                </TouchableOpacity>
                <StatusBar style="auto" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#6599EE',
        alignItems: 'center',

    },

    logo: {
        marginTop: 30,
    },

    buttons: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
    },

    button: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        height: 65,
        width: 250,
        backgroundColor: '#FFFFFF',
        color: '#000000',
        borderRadius: 15,
        borderColor: '#797979',
        borderStyle: 'solid',
        borderWidth: 2,
    },

    textBtn: {
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
    }
});
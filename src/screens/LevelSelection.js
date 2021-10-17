import React from "react";
import { View, Text, TouchableOpacity, Modal, StyleSheet } from "react-native";

import StylesLevel from "./StylesLevel";

export default props => {
    return (
        <Modal onRequestClose={props.onCancel}
            visible={props.isVisible} animationType='slide'
            transparent={true}>
            <View style={styles.frame}>
                <View style={styles.container}>
                    <Text style={styles.title}>Selecione o Nível</Text>
                    <StylesLevel
                        bgEasy
                        onClick={() => props.onLevelSelected(0.1)}>
                        <Text style={styles.buttonLabel}>Fácil</Text>
                    </StylesLevel>
                    <StylesLevel
                        bgNormal
                        onClick={() => props.onLevelSelected(0.2)}>
                        <Text style={styles.buttonLabel}>Intermediário</Text>
                    </StylesLevel>
                    <StylesLevel
                        bgHard
                        onClick={() => props.onLevelSelected(0.3)}>
                        <Text style={styles.buttonLabel}>Difícil</Text>
                    </StylesLevel>
                </View>
            </View>
        </Modal>
    )
}
const styles = StyleSheet.create({
    frame: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    container: {
        backgroundColor: '#EEE',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
    },
    buttonLabel: {
        fontSize: 20,
        color: '#EEE',
        fontWeight: 'bold',
    },


})

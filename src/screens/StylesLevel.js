import React from "react"
import { Text, TouchableOpacity, Modal, StyleSheet } from "react-native";

export default props => {


    const { button, bgEasy, bgNormal, bgHard } = props

    const styleLevel = [styles.button]
    if (!button) styleLevel.push(styles.button)
    if (bgEasy) styleLevel.push(styles.bgEasy)
    if (bgNormal) styleLevel.push(styles.bgNormal)
    if (bgHard) styleLevel.push(styles.bgHard)

    return (
        <TouchableOpacity style={styleLevel}
            onPress={() => props.onClick(props.onLevelSelected)}>
            {props.children}
        </TouchableOpacity >
    )
}




const styles = StyleSheet.create({
    button: {
        marginTop: 10,
        padding: 5,
    },
    bgEasy: {
        backgroundColor: '#49b65d'
    },
    bgNormal: {
        backgroundColor: '#2765F7'
    },
    bgHard: {
        backgroundColor: '#F26337'
    },

})



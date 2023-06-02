import {Modal, Pressable, StyleSheet, Text, View} from "react-native";


function ModalComp(props) {
    return(
        <Modal
            visible={props.visible}
            onRequestClose={props.onRequestClose}
            transparent
        >
            <View style={styles.centered}>
                <View style={styles.modal}>
                    <View style={styles.modalBody}>
                        <Text style={styles.text}>
                            {props.textInMiddle}
                        </Text>

                        <Pressable
                            onPress={props.onPress}
                            style={styles.button}
                            android_ripple={{color: "#7c2525"}}
                        >
                            <Text style={styles.text}>
                                {props.firstButtonText}
                            </Text>
                        </Pressable>
                        <Pressable
                            onPress={props.onPressTwo}
                            style={styles.button}
                            android_ripple={{color: "#7c2525"}}
                        >
                            <Text style={styles.text}>
                                {props.secondButtonText}
                            </Text>
                        </Pressable>

                    </View>
                </View>
            </View>
        </Modal>
    )
}
const styles = StyleSheet.create({
    centered: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(17,7,17,0.6)"
    },
    modal: {
        width: 300,
        borderColor: "#fff",
        borderWidth: 2,
        borderRadius: 10,

    },
    modalBody: {
      backgroundColor: "#856464",

    },
    button: {
        height: 50,
        backgroundColor: "#fff",
    },
    text: {
        color: "#851f1f",
        fontWeight: "bold",
        fontSize: 20,
        textAlign: "center",
        margin: 10
    }
});

export default ModalComp
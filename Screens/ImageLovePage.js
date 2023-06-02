import {StyleSheet, TextInput, TouchableWithoutFeedback, Text, View, Keyboard} from "react-native";
import ButtonComp from "../components/ButtonComp";
import ImageComp from "../components/ImageComp";
import {useState} from "react";

function ImageLovePage({ navigation }) {

    const [name, setName] = useState("")
    const goToListScreen = () => {
        navigation.navigate("ListPage")
    }
    const goToLoveYouPage = () => {
        navigation.navigate("LoveYouPage")
    }
    const [count, setCount] = useState(0);

    const onPress = () => {
        setCount(count + 1);
    };
    const onPressLess = () => {
        setCount(count - 1);
    };


    const dismissKeyboard = () => {
            Keyboard.dismiss();
    };

    return(
            <TouchableWithoutFeedback onPress={dismissKeyboard}>
                <View style={styles.body}>

                    <ButtonComp
                        onPress={goToListScreen}
                        title={"Listan"}
                        style={styles.cancelButton}
                    />

                    <ButtonComp
                        onPress={goToLoveYouPage}
                        title={"Sidan som gillar dig"}
                        style={styles.cancelButton}
                    />

                    <Text style={styles.text}>Gillar du bilden?</Text>
                    <TextInput
                        placeholder={""}
                        style={styles.input}
                        onChangeText={(value) => setName(value)}/>
                    <Text style={styles.text}>{name}</Text>
                    <Text style={styles.text}>ok, men hur mycket gillar du bilden?</Text>
                    <Text style={styles.text}>{count}</Text>

                    <TouchableWithoutFeedback onPress={onPress}>
                        <View style={styles.button}>
                            <Text style={styles.text}>Mer</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={onPressLess}>
                        <View style={styles.button}>
                            <Text style={styles.text}>Mindre</Text>
                        </View>
                    </TouchableWithoutFeedback>

                        <ImageComp/>

                </View>
            </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: 'rgba(61,13,84,0.87)',
        alignItems: "center",
        justifyContent: "center",
        padding: 30
    },
    text: {
        color: "white",
        fontWeight: "bold",
        fontSize: 30
    },
    input: {
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "#3f0528",
        margin: 10,
        padding: 10,
    },
    cancelButton: {
        borderWidth: 1,
        borderColor: "#3f0528",
        width: 200,
        height: 50,
        padding: 10,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20
    },
});

export default ImageLovePage

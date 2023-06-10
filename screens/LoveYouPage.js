import {Keyboard, Text, TextInput, TouchableWithoutFeedback, View} from "react-native";
import {StyleSheet} from "react-native";
import ButtonComp from "../components/ButtonComp";
import ImageComp from "../components/ImageComp";
import {useState} from "react";
import ModalComp from "../components/ModalComp";



function LoveYouPage({ navigation }) {

    const [name, setName] = useState("")
    const [showModalList, setShowModalList] = useState(false)
    const [showImageLoveModal, setShowImageLoveModal] = useState(false)

    const onPressGoToListPage = () => {
        setShowModalList(false)
        navigation.navigate("ListPage")
    }
    const onPressGoToImageLovePage = () => {
        setShowImageLoveModal(false)
        navigation.navigate("ImageLovePage")
    }
    const showListModal = () => {
        setShowModalList(true)
    }
    const showLoveImageModal = () => {
        setShowImageLoveModal(true)
    }
    const dismissKeyboard = () => {
        Keyboard.dismiss();
    };

    return(
        <TouchableWithoutFeedback onPress={dismissKeyboard}>
            <View style={styles.body}>

                <ModalComp
                    visible={showModalList}
                    onRequestClose={() => setShowModalList(false)}
                    onPress={onPressGoToListPage}
                    onPressTwo={() => setShowModalList(false)}
                    textInMiddle={"Är du säker på att du vill lämna mig?"}
                    firstButtonText={"Ja!"}
                    secondButtonText={"nej?"}
                />

                <ModalComp
                    visible={showImageLoveModal}
                    onRequestClose={() => setShowImageLoveModal(false)}
                    onPress={onPressGoToImageLovePage}
                    onPressTwo={() => setShowImageLoveModal(false)}
                    textInMiddle={"Är du säker på att du vill lämna mig?"}
                    firstButtonText={"Ja!"}
                    secondButtonText={"nej?"}
                />

                <Text style={styles.text}>Sidan som gillar dig..</Text>

                <ButtonComp
                    onPress={showListModal}
                    title={"Listan"}
                    style={({pressed}) => [
                        {backgroundColor: pressed ? "#831477" : "#7edcdc"},
                        styles.button
                    ]}/>
                <ButtonComp
                    onPress={showLoveImageModal}
                    title={"En fin bild"}
                    style={({pressed}) => [
                        {backgroundColor: pressed ? "#831477" : "#7edcdc"},
                        styles.button
                    ]}/>

                <Text style={styles.text}>Hur mycket gillar du den här sidan!?</Text>
                <TextInput
                    placeholder={""}
                    style={styles.input}
                    keyboardType="numeric"
                    onChangeText={(value) => setName(value)}/>
                <Text style={styles.text}>{name}</Text>

                <ImageComp/>

            </View>
        </TouchableWithoutFeedback>

    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: 'rgba(48,73,114,0.87)',
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
    button: {
        width: 200,
        height: 50,
        padding: 10,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20
    }

});

export default LoveYouPage
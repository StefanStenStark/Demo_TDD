import {Text, View} from "react-native";
import {Pressable, StyleSheet} from "react-native";
import {ScrollView} from "react-native";
import {useState} from "react";
import ButtonComp from "../components/ButtonComp";
import ModalComp from "../components/ModalComp";

function ListPage({navigation}) {

    const [showModalList, setShowModalList] = useState(false)
    const [startList] = useState([
        { name: "Tvätta bilen", key: "1" },
        { name: "Köpa tofu", key: "2" },
        { name: "Klippa gräsmattan", key: "3" },
        { name: "Klappa djur", key: "4" },
        { name: "Tvätta cykeln", key: "5" },
        { name: "Köpa gurka", key: "6" },
        { name: "Dansa", key: "7" },
        { name: "Le", key: "8" },
    ]);

    const goToLoveYouPage = () => {
        navigation.navigate("LoveYouPage")
    }
    const goToImageLovePage = () => {
        navigation.navigate("ImageLovePage")
    }
    const showListModal = () => {
        setShowModalList(true)
    }
    return(
        <View style={styles.body}>

            <ModalComp
                visible={showModalList}
                onRequestClose={() => setShowModalList(false)}
                onPress={() => setShowModalList(false)}
                onPressTwo={() => setShowModalList(false)}
                textInMiddle={"Vad kul att du gillar det :)"}
                firstButtonText={"Tack"}
                secondButtonText={"Jag vet.."}
            />

            <Text style={styles.text}>
                En sida med en lista
            </Text>

            <ButtonComp
                onPress={goToImageLovePage}
                title={"Gilla bilden sidan"}
                style={({pressed}) => [
                    {backgroundColor: pressed ? "#831477" : "#7edcdc"},
                    styles.button
                ]}
            />
            <ButtonComp
                onPress={goToLoveYouPage}
                title={"Sidan som gillar dig"}
                style={({pressed}) => [
                    {backgroundColor: pressed ? "#831477" : "#7edcdc"},
                    styles.button
                ]}
            />

            <Text style={styles.text}>
                Saker jag gillar!
            </Text>

            <ScrollView>
                {startList.map((item) => {
                    return (
                        <View key={item.key}>
                            <Pressable
                                onPress={() => showListModal()}
                                style={({pressed}) => [
                                    {backgroundColor: pressed ? "#8e8f64" : "#bdcb24"},
                                    styles.button
                                ]}
                            >
                                <Text style={styles.buttonText}>{item.name}</Text>
                            </Pressable>
                        </View>
                    )
                })}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: 'rgba(48,73,114,0.87)',
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 30
    },
    text: {
        color: "white",
        fontWeight: "bold",
        fontSize: 30
    },
    buttonText: {
        color: "white",
        fontSize: 20
    },
    button: {
        // backgroundColor: "#3f0528",
        width: 200,
        height: 50,
        padding: 10,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
        marginTop: 20
    },
});

export default ListPage
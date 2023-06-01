import {Text, View} from "react-native";
import {Pressable, StyleSheet, ImageBackground} from "react-native";
import ButtonComp from "../components/ButtonComp";
import ImageComp from "../components/ImageComp";
import {useState} from "react";
import ModalComp from "../components/ModalComp";



function SingleTaskScreen({ navigation, route }) {

    const {name, key} =route.params.item;

    const [showModalDelete, setShowModalDelete] = useState(false)
    const [showModalFinish, setShowModalFinish] = useState(false)

    const onPressFinishTask = () => {
        setShowModalFinish(true)
    }
    const onPressDeleteTask = () => {
        navigation.navigate("ListScreen", { RemoveThisId: key, deleteId: true}),
        () => setShowModalDelete(false)
    }

    const onPressReturnToList = () => {
        navigation.navigate("ListScreen", { RemoveThisId: null})
    }
    const doNotQuit = () => {
        setShowModalDelete(true)
    }

    return(
        <View style={styles.body}>

            <ModalComp
                visible={showModalDelete}
                onRequestClose={() => setShowModalDelete(false)}
                onPress={onPressDeleteTask}
                onPressTwo={() => setShowModalDelete(false)}
                textInMiddle={"Sure you want to delete task?"}
                firstButtonText={"Delete task"}
                secondButtonText={"Return"}
            />

            <ModalComp
                visible={showModalFinish}
                onRequestClose={() => setShowModalFinish(false)}
                onPress={onPressDeleteTask}
                onPressTwo={() => setShowModalFinish(false)}
                textInMiddle={"Did you finish the task?"}
                firstButtonText={"Yes"}
                secondButtonText={"No"}
            />

            <Text style={styles.text}>{name}</Text>
            <Text>id: {key}</Text>

            <ButtonComp
                onPress={onPressFinishTask}
                title={"Finish task"}
                style={({pressed}) => [
                    {backgroundColor: pressed ? "#831477" : "#7edcdc"},
                    styles.button
                ]}/>


            <ButtonComp
                onPress={doNotQuit}
                title={"DeleteTask"}
                style={({pressed}) => [
                    {backgroundColor: pressed ? "#831477" : "#7edcdc"},
                    styles.button
                ]}/>

            <ButtonComp
                onPress={onPressReturnToList}
                title={"Return"}
                style={({pressed}) => [
                    {backgroundColor: pressed ? "#831477" : "#7edcdc"},
                    styles.button
                ]}/>




            <ImageComp/>


        </View>
    )
}

export default SingleTaskScreen



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
    buttonText: {
        color: "white",
        fontSize: 20
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
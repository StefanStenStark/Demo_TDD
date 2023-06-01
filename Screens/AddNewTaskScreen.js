import {Text, View} from "react-native";
import {Pressable, StyleSheet, TextInput} from "react-native";
import {useState} from "react";
import ButtonComp from "../components/ButtonComp";
import ImageComp from "../components/ImageComp";

function AddNewTaskScreen({ navigation }) {

    const [name, setName] = useState("NyTask")
    const onFinishTaskHandler = () => {
        navigation.navigate("ListScreen", { newTaskName: name, updateNewTask: true})
    }
    const onCancelHandler = () => {
        navigation.navigate("ListScreen", { newTaskName: null, updateNewTask: false})
    }
    return(
        <View style={styles.body}>


            <Text style={styles.text}>Name the task: </Text>
            <TextInput
                placeholder={"Name of task"}
                style={styles.input}
                onChangeText={(value) => setName(value)}/>


{/*
            <Pressable
                onPress={onFinishTaskHandler}
                style={({pressed}) => [
                    {backgroundColor: pressed ? "#831477" : "#d283c8"},
                    styles.button
                ]}
            >
                <Text style={styles.buttonText}>
                    Add task
                </Text>
            </Pressable>
*/}

            <ButtonComp
                onPress={onFinishTaskHandler}
                title={"Add task"}
                //color="#831477"
                style={styles.cancelButton}
                />

            <ButtonComp
                onPress={onCancelHandler}
                title={"Cancel"}
                style={({pressed}) => [
                {backgroundColor: pressed ? "#831477" : "#7edcdc"},
                styles.button
            ]}/>

            <ImageComp/>

        </View>
    )
}

export default AddNewTaskScreen



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
    cancelButton: {
        // backgroundColor: "#3f0528",
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
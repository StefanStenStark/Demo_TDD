import {Text, View} from "react-native";
import {Pressable, StyleSheet} from "react-native";
import {ScrollView} from "react-native";
import {useEffect, useState} from "react";
import ButtonComp from "../components/ButtonComp";
import AsyncStorage from '@react-native-async-storage/async-storage';


function ListScreen({navigation, route}) {

    const { newTaskName, updateNewTask, RemoveThisId } = route.params;
    const [deleteId, setDeleteId] = useState(false)
    const [updateTaskName, setUpdateTaskName] = useState(false)



    useEffect(() => {
        if(deleteId){
            removeId();
        }
    });

    useEffect(() => {
        setDeleteId(true)
        console.log("setDeleteId")
    },[RemoveThisId]);

    const removeId = () => {
        setNames((current) =>
            current.filter((names) => names.key !== RemoveThisId)
        );
        console.log("HejHej" + RemoveThisId);
        setDeleteId(false)
    };

    useEffect(() => {
        setUpdateTaskName(updateNewTask)
        console.log("Kommer in i useEffect där fetchNames ")
        const fetchNames = async () => {
            try {
                console.log("Inget Problem with FetchNames")

                const storedNames = await AsyncStorage.getItem('names');
                if (storedNames) {
                    setNames(JSON.parse(storedNames));
                }
            } catch (error) {
                console.log("Problem with FetchNames")
            }
        };
        fetchNames();
    }, [newTaskName]);


    useEffect(() => {
        console.log("Kommer in i udateName")
        if(updateTaskName){
            console.log("Kommer in i udateName och ifsatsen")
            setNames([...names, {name: newTaskName, key: "69"
            }]);
            setUpdateTaskName(false)
        }
    });



    const [startList, setStartList] = useState([
        { name: "Tvätta bilen", key: "1" },
        { name: "Köpa tofu", key: "2" },
        { name: "Klippa gräsmattan", key: "3" },
        { name: "Klappa djur", key: "4" },
    ]);

    const [names, setNames] = useState(startList
    );

    useEffect(() => {
        const saveNames = async () => {
            try {
                await AsyncStorage.setItem('names', JSON.stringify(names));
            } catch (error) {
                console.log("Problem with SaveNames")
            }
        };

        saveNames();
    }, [names]);


    const onPressSingleTaskHandler = (item) => {
        navigation.navigate("SingleTaskScreen", {item: item})
    }

    const onPressNewTaskHandler = () => {
        navigation.navigate("AddNewTaskScreen")
    }
    return(


        <View style={styles.body}>
            <Text style={styles.text}>
                Tasks
            </Text>

            <Text>
                Item ID: {RemoveThisId}
            </Text>

            <ButtonComp
                onPress={onPressNewTaskHandler}
                title={"Add a task"}
                style={styles.buttonLarge}
            />



            <ScrollView>
                {names.map((item) => {
                    return (
                        <View key={item.key}>
                            <Pressable
                                onPress={() => onPressSingleTaskHandler(item)}
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


export default ListScreen



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
    input: {
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "#3f0528",
        margin: 10,
        padding: 10,
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
    buttonLarge: {
        // backgroundColor: "#3f0528",
        width: 250,
        height: 45,
        padding: 15,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
        marginTop: 20
    },
    item: {
        margin: 20,
        padding: 20,
        backgroundColor: 'rgb(10,60,61)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        flex: 1,
        justifyContent: 'center',
    }
});
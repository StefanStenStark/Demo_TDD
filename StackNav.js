import SingleTaskScreen from "./Screens/SingleTaskScreen";
import AddNewTaskScreen from "./Screens/AddNewTaskScreen";
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import ListScreen from "./Screens/ListScreen";

const Stack = createStackNavigator();

function StackNav() {
    return(
        <NavigationContainer>
            <Stack.Navigator>

                <Stack.Screen
                    name={"ListScreen"}
                    component={ListScreen}
                    options={{headerShown: false}}
                    initialParams={{ RemoveThisId: ""}}/>

                <Stack.Screen
                    name={"SingleTaskScreen"}
                    component={SingleTaskScreen}
                    options={{headerShown: false}}/>

                <Stack.Screen
                    name={"AddNewTaskScreen"}
                    component={AddNewTaskScreen}
                    options={{headerShown: false}}/>



            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNav
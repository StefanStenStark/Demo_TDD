import LoveYouPage from "./Screens/LoveYouPage";
import ImageLovePage from "./Screens/ImageLovePage";
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import ListPage from "./Screens/ListPage";

const Stack = createStackNavigator();

function StackNav() {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name={"ListPage"}
                    component={ListPage}
                    options={{headerShown: false}}
                    initialParams={{ RemoveThisId: ""}}/>
                <Stack.Screen
                    name={"LoveYouPage"}
                    component={LoveYouPage}
                    options={{headerShown: false}}/>
                <Stack.Screen
                    name={"ImageLovePage"}
                    component={ImageLovePage}
                    options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNav
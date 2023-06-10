import LoveYouPage from "./screens/LoveYouPage";
import ImageLovePage from "./screens/ImageLovePage";
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import ListPage from "./screens/ListPage";

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
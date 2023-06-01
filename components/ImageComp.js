import {Image, StyleSheet} from "react-native";


function ImageComp() {
    return <Image
        source={require("./Manipura.jpg")}
        style={styles.backgroundImage}
    />
    ;
}


const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        alignItems: "center",
        justifyContent: "center",
    }
});

export default ImageComp
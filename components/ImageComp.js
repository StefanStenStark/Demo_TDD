import {Image, StyleSheet} from "react-native";


function ImageComp() {
    return <Image
        source={require("./Manipura.jpg")}
        style={styles.images}
    />
    ;
}

const styles = StyleSheet.create({
    images: {
        flex: 1,
        width: '50%',
        height: '50%',
        resizeMode: 'cover',
        justifyContent: "center",
    }
});

export default ImageComp
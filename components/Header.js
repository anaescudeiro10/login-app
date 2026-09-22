import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

export default function Header({ navigation }) {
    return (
        <View style={styles.container}>

            <Image
                style={styles.logo}
                source={require("../assets/LogoMenor.png")}
            />

            <TouchableOpacity>
                <Image
                    style={styles.notificacao}
                    source={require("../assets/notificacoes.png")}
                />
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",

        backgroundColor: "#2A2929",

        width: "100%",
        height: 150,

        paddingHorizontal: 20,
        paddingTop: 35,
    },

    logo: {
        width: 175,
        height: 60,
        resizeMode: "contain",
    },

    notificacao: {
        width: 31,
        height: 31,
        resizeMode: "contain",
    },

});
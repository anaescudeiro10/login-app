import React, { useState } from "react";

import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Image
} from "react-native";

import Botao from "../../components/Botao";

export default function Login({ setTela }) {

    const [cpfCnpj, setCpfCnpj] = useState("");
    const [senha, setSenha] = useState("");

    const entrar = () => {
        console.log("CPF/CNPJ:", cpfCnpj);
        console.log("Senha:", senha);

        setTela("aberto");
    };

    return (
        <View style={styles.container}>

            <Image
                source={require("../../assets/logoo.png")}
                style={styles.logo}
                resizeMode="contain"
            />

            <Text style={styles.titulo}>
                Bem-vindo de volta!
            </Text>

            <Text style={styles.label}>
                CPF/CNPJ
            </Text>

            <TextInput
                style={styles.input}
                value={cpfCnpj}
                onChangeText={setCpfCnpj}
                keyboardType="numeric"
                autoCapitalize="none"
            />

            <Text style={styles.labelSenha}>
                Senha
            </Text>

            <TextInput
                style={styles.input}
                value={senha}
                onChangeText={setSenha}
                secureTextEntry={true}
            />

            <View style={styles.areaBotao}>
                <Botao
                    texto="Entrar"
                    acao={entrar}
                />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#1E1E1E",
        justifyContent: "center",
        paddingHorizontal: 20,
    },

    logo: {
        width: 250,
        height: 100,
        alignSelf: "center",
        marginBottom: 25,
    },

    titulo: {
        color: "#FFFFFF",
        fontSize: 26,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 40,
    },

    label: {
        color: "#FFFFFF",
        fontSize: 17,
        fontWeight: "bold",
        marginBottom: 10,
    },

    labelSenha: {
        color: "#FFFFFF",
        fontSize: 17,
        fontWeight: "bold",
        marginTop: 18,
        marginBottom: 10,
    },

    input: {
        width: "100%",
        height: 44,
        backgroundColor: "#FFFFFF",
        borderRadius: 7,
        paddingHorizontal: 12,
        fontSize: 16,
        color: "#000000",
    },

    areaBotao: {
        alignItems: "center",
        marginTop: 45,
    },

});
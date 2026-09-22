import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

export default function PagamentoAberto() {

    function pagarAgora() {
        console.log("Pagamento iniciado");
    }

    return (
        <View style={styles.container}>

            <ScrollView
                style={styles.scroll}
                contentContainerStyle={styles.conteudo}
                showsVerticalScrollIndicator={false}
            >

                {/* RESUMO FINANCEIRO */}
                <View style={styles.resumo}>

                    <Text style={styles.tituloResumo}>
                        Resumo Financeiro
                    </Text>

                    <View style={styles.linhaResumo}>

                        {/* EM ABERTO */}
                        <View style={styles.colunaResumo}>
                            <Text style={styles.vermelho}>
                                Em Aberto
                            </Text>

                            <Text style={styles.valorVermelho}>
                                R$ 1.000,00
                            </Text>

                            <Text style={styles.cobranca}>
                                1 Cobrança
                            </Text>
                        </View>

                        <View style={styles.divisoria} />

                        {/* A VENCER */}
                        <View style={styles.colunaResumo}>
                            <Text style={styles.amarelo}>
                                A Vencer
                            </Text>

                            <Text style={styles.valorAmarelo}>
                                R$ 1.000,00
                            </Text>

                            <Text style={styles.cobranca}>
                                1 Cobrança
                            </Text>
                        </View>

                        <View style={styles.divisoria} />

                        {/* PAGOS */}
                        <View style={styles.colunaResumo}>
                            <Text style={styles.verde}>
                                Pagos
                            </Text>

                            <Text style={styles.valorVerde}>
                                R$ 1.000,00
                            </Text>

                            <Text style={styles.cobranca}>
                                1 Pago
                            </Text>
                        </View>

                    </View>

                </View>


                {/* ABAS */}
                <View style={styles.abas}>

                    <TouchableOpacity style={styles.abaAtiva}>
                        <Text style={styles.textoAbaAtiva}>
                            Em Aberto
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.aba}>
                        <Text style={styles.textoAba}>
                            A Vencer
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.aba}>
                        <Text style={styles.textoAba}>
                            Pagos
                        </Text>
                    </TouchableOpacity>

                </View>


                {/* CARD DA COBRANÇA */}
                <View style={styles.card}>

                    <View style={styles.linhaSuperiorCard}>

                        {/* ÍCONE */}
                        <View style={styles.caixaIcone}>
                            <Ionicons
                                name="document-outline"
                                size={32}
                                color="#FF5B61"
                            />
                        </View>

                        {/* INFORMAÇÕES */}
                        <View style={styles.infoDocumento}>

                            <Text style={styles.nomeCobranca}>
                                Honorário
                            </Text>

                            <Text style={styles.processo}>
                                Processo Nº 0000001
                            </Text>

                        </View>

                    </View>


                    {/* INFORMAÇÕES DE PAGAMENTO */}
                    <View style={styles.informacoesPagamento}>

                        {/* VENCIMENTO */}
                        <View style={styles.itemPagamento}>

                            <View style={styles.tituloItem}>

                                <Ionicons
                                    name="calendar-outline"
                                    size={21}
                                    color="#0757B9"
                                />

                                <Text style={styles.labelItem}>
                                    Vencimento
                                </Text>

                            </View>

                            <Text style={styles.valorItem}>
                                02/08/2026
                            </Text>

                        </View>


                        {/* VALOR */}
                        <View style={styles.itemPagamento}>

                            <Text style={styles.labelValor}>
                                Valor
                            </Text>

                            <Text style={styles.valorCobranca}>
                                R$ 1.000,00
                            </Text>

                        </View>

                    </View>


                    {/* BOTÃO */}
                    <TouchableOpacity
                        style={styles.botaoPagar}
                        onPress={pagarAgora}
                        activeOpacity={0.8}
                    >
                        <Text style={styles.textoBotao}>
                            Pagar Agora
                        </Text>
                    </TouchableOpacity>

                </View>

            </ScrollView>


            {/* MENU INFERIOR */}
            <View style={styles.menuInferior}>

                {/* INÍCIO */}
                <TouchableOpacity style={styles.itemMenu}>
                    <Ionicons
                        name="home-outline"
                        size={27}
                        color="#0757B9"
                    />

                    <Text style={styles.textoMenu}>
                        Início
                    </Text>
                </TouchableOpacity>


                {/* PAGAMENTOS */}
                <TouchableOpacity style={styles.itemMenu}>
                    <Ionicons
                        name="logo-usd"
                        size={29}
                        color="#0757B9"
                    />

                    <Text style={styles.textoMenuAtivo}>
                        Pagamentos
                    </Text>
                </TouchableOpacity>


                {/* REUNIÕES */}
                <TouchableOpacity style={styles.itemMenu}>
                    <Ionicons
                        name="calendar-outline"
                        size={27}
                        color="#0757B9"
                    />

                    <Text style={styles.textoMenu}>
                        Reuniões
                    </Text>
                </TouchableOpacity>


                {/* PROCESSOS */}
                <TouchableOpacity style={styles.itemMenu}>
                    <Ionicons
                        name="document-outline"
                        size={27}
                        color="#0757B9"
                    />

                    <Text style={styles.textoMenu}>
                        Processos
                    </Text>
                </TouchableOpacity>


                {/* PERFIL */}
                <TouchableOpacity style={styles.itemMenu}>
                    <Ionicons
                        name="person-outline"
                        size={27}
                        color="#0757B9"
                    />

                    <Text style={styles.textoMenu}>
                        Perfil
                    </Text>
                </TouchableOpacity>

            </View>

        </View>
    );
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#F5F5F5",
    },

    scroll: {
        flex: 1,
    },

    conteudo: {
        paddingHorizontal: 15,
        paddingTop: 10,
        paddingBottom: 30,
    },


    /* RESUMO */

    resumo: {
        backgroundColor: "#FFFFFF",
        borderRadius: 7,
        paddingTop: 14,
        paddingBottom: 15,
        paddingHorizontal: 8,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.20,
        shadowRadius: 4,
        elevation: 5,
    },

    tituloResumo: {
        fontSize: 17,
        fontWeight: "bold",
        color: "#111111",
        marginLeft: 5,
        marginBottom: 20,
    },

    linhaResumo: {
        flexDirection: "row",
        alignItems: "stretch",
        justifyContent: "space-between",
    },

    colunaResumo: {
        flex: 1,
        alignItems: "flex-start",
        paddingHorizontal: 5,
    },

    divisoria: {
        width: 1,
        backgroundColor: "#75A4E0",
        height: 75,
    },

    vermelho: {
        color: "#FF4D55",
        fontSize: 13,
        fontWeight: "bold",
        marginBottom: 10,
    },

    amarelo: {
        color: "#E6B000",
        fontSize: 13,
        fontWeight: "bold",
        marginBottom: 10,
    },

    verde: {
        color: "#59A83B",
        fontSize: 13,
        fontWeight: "bold",
        marginBottom: 10,
    },

    valorVermelho: {
        color: "#FF4D55",
        fontSize: 13,
        fontWeight: "bold",
        marginBottom: 23,
    },

    valorAmarelo: {
        color: "#E6B000",
        fontSize: 13,
        fontWeight: "bold",
        marginBottom: 23,
    },

    valorVerde: {
        color: "#59A83B",
        fontSize: 13,
        fontWeight: "bold",
        marginBottom: 23,
    },

    cobranca: {
        color: "#777777",
        fontSize: 12,
        fontWeight: "600",
    },


    /* ABAS */

    abas: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 32,
        marginBottom: 14,
        paddingHorizontal: 2,
    },

    aba: {
        width: "33%",
        alignItems: "center",
        paddingBottom: 5,
    },

    abaAtiva: {
        width: "33%",
        alignItems: "flex-start",
        paddingBottom: 5,
        borderBottomWidth: 1,
        borderBottomColor: "#0757B9",
    },

    textoAbaAtiva: {
        color: "#0757B9",
        fontSize: 12,
        fontWeight: "bold",
    },

    textoAba: {
        color: "#AAAAAA",
        fontSize: 12,
        fontWeight: "bold",
    },


    /* CARD */

    card: {
        backgroundColor: "#FFFFFF",
        borderRadius: 6,
        padding: 12,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.18,
        shadowRadius: 4,
        elevation: 5,
    },

    linhaSuperiorCard: {
        flexDirection: "row",
        alignItems: "center",
    },

    caixaIcone: {
        width: 36,
        height: 36,
        borderRadius: 5,
        backgroundColor: "#FFE1E2",
        alignItems: "center",
        justifyContent: "center",
    },

    infoDocumento: {
        marginLeft: 7,
    },

    nomeCobranca: {
        fontSize: 13,
        fontWeight: "bold",
        color: "#222222",
    },

    processo: {
        fontSize: 11,
        color: "#AAAAAA",
        marginTop: 3,
    },


    /* INFORMAÇÕES */

    informacoesPagamento: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 17,
        paddingHorizontal: 38,
    },

    itemPagamento: {
        minWidth: 105,
    },

    tituloItem: {
        flexDirection: "row",
        alignItems: "center",
    },

    labelItem: {
        color: "#AAAAAA",
        fontSize: 12,
        fontWeight: "600",
        marginLeft: 6,
    },

    valorItem: {
        color: "#333333",
        fontSize: 12,
        marginTop: 3,
        marginLeft: 23,
    },

    labelValor: {
        color: "#AAAAAA",
        fontSize: 12,
        fontWeight: "600",
        marginBottom: 3,
    },

    valorCobranca: {
        color: "#FF4D55",
        fontSize: 12,
        fontWeight: "bold",
    },


    /* BOTÃO PAGAR */

    botaoPagar: {
        alignSelf: "flex-end",
        backgroundColor: "#0757B9",
        borderRadius: 5,
        paddingVertical: 6,
        paddingHorizontal: 17,
        marginTop: 17,
    },

    textoBotao: {
        color: "#FFFFFF",
        fontSize: 12,
        fontWeight: "bold",
    },


    /* MENU INFERIOR */

    menuInferior: {
        height: 70,
        backgroundColor: "#FFFFFF",
        borderTopWidth: 1,
        borderTopColor: "#B7D0EF",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: -2,
        },
        shadowOpacity: 0.10,
        shadowRadius: 3,
        elevation: 8,
    },

    itemMenu: {
        alignItems: "center",
        justifyContent: "center",
        width: "20%",
    },

    textoMenu: {
        color: "#0757B9",
        fontSize: 8,
        marginTop: 2,
    },

    textoMenuAtivo: {
        color: "#0757B9",
        fontSize: 8,
        fontWeight: "bold",
        marginTop: 2,
    },

});
import React, { useState } from "react";

import Login from "./src/screens/Login";
import PagamentoAberto from "./src/screens/PagamentoAberto";
import PagamentoAVencer from "./src/screens/PagamentoAVencer";
import PagamentoPago from "./src/screens/PagamentoPago";

import Header from "./components/Header";

export default function App() {

  const [tela, setTela] = useState("login");

  // LOGIN - SEM HEADER
  if (tela === "login") {
    return (
        <Login setTela={setTela} />
    );
  }

  // TODAS AS OUTRAS TELAS - COM HEADER
  return (
      <>
        <Header />

        {tela === "aberto" && (
            <PagamentoAberto />
        )}

        {tela === "aVencer" && (
            <PagamentoAVencer />
        )}

        {tela === "pago" && (
            <PagamentoPago />
        )}
      </>
  );
}
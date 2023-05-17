<<<<<<< HEAD
import Menu from "../components/Menu/Menu";
import Cartao from "../components/Cartao/Cartao";
import { Tudo } from "../components/Cartao/style";


const suporte = () => (
    <Tudo>
    <Menu />
    <h1 class="titulos">Suporte</h1>
    <h2 class="titulos">Horário de funcionamento</h2>
    <Cartao 
        simb={"Telefone"}
    />
    <Cartao 
        simb={"Email"}
    />
    <Cartao 
        simb={"Chat"}
    />
    </Tudo>
);
export default suporte;
=======
import React from "react";
import Menu from "../components/Menu/Menu";
import Cartao from "../components/Cartao/Cartao";
import { Tudo } from "../components/Cartao/style";
import "../pages/style.css";

const Suporte = () => (
  <Tudo>
    <Menu />
    <h1 className="titulos">Suporte</h1>
    <h2 className="titulos">Horário de funcionamento</h2>
    <Cartao simb="Telefone" />
    <Cartao simb="Email" />
    <Cartao simb="Chat" />
  </Tudo>
);

export default Suporte;
>>>>>>> c8d2eb2652eff0d0203420e4e769ada2d35c1fb4

import React from "react";
import { FaPlus } from "react-icons/fa";

import "./styles.css";

import Header from "../../components/Header";

import womanImg from "../../assets/woman.svg";

function FaleMais() {
  return (
    <>
      <Header />
      <main>
        <div className="img-container">
          <img src={womanImg} alt="Mulher utilizando celular" />
        </div>

        <div className="calculator-container">
          <div className="calculator-title-">
            <h1>
              PLANO FALE <FaPlus color={"#FFB800"} />
            </h1>
            <span>Calcule o valor da sua ligação</span>
          </div>
        </div>
      </main>
    </>
  );
}

export default FaleMais;

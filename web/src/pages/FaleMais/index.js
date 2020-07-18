import React from "react";
import { FaPlus } from "react-icons/fa";
import { FiPhoneForwarded } from "react-icons/fi";

import "./styles.css";

import Header from "../../components/Header";
import Select from "../../components/Select";

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
          <div className="calculator-title-container">
            <h1>
              PLANO FALE <FaPlus color={"#FFB800"} />
            </h1>
            <span>Calcule o valor da sua ligação</span>
          </div>
          <div className="inputs-container">
            <label htmlFor="originDDD">
              <div className="input-title-container">
                ORIGEM<span>(DDD)</span>
              </div>
              <Select
                options={[`0${11}`, `0${21}`, `0${31}`]}
                label={"originDDD"}
              />
            </label>

            <FiPhoneForwarded size={14} />

            <label htmlFor="destinyDDD">
              <div className="input-title-container">
                DESTINO<span>(DDD)</span>
              </div>
              <Select
                options={[`0${11}`, `0${21}`, `0${31}`]}
                label={"destinyDDD"}
              />
            </label>
          </div>

          <div className="plan-input-container">
            <label htmlFor="call-plan">
              <div className="input-title-container">
                PLANO<span>Escolha uma opção</span>
              </div>
              <Select
                options={[
                  `Fale mais ${30}`,
                  `Fale mais ${60}`,
                  `Fale mais ${120}`,
                ]}
                label={"call-plan"}
              />
            </label>
          </div>

          <div className="result-container">
            <div className="result-with-plan-container">
              <p>COM FALEMAIS</p>
              <div className="result-with-plan">
                <span>R$</span>
                <strong>{37}</strong>
                <span>,{40}</span>
              </div>
            </div>
            <div className="result-without-plan">
              <div className="result-without-plan-container">
                <p>SEM FALEMAIS</p>
                <div className="result-without-plan">
                  <span>R$</span>
                  <strong>{136}</strong>
                  <span>{`,${40}`}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default FaleMais;

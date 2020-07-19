import React, { useEffect, useState, useCallback } from "react";
import { FaPlus } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./styles.css";

import api from "../../services/api";
import Header from "../../components/Header";
import Select from "../../components/Select";

import womanImg from "../../assets/woman.svg";

function FaleMais() {
  const [originDDD, setOriginDDD] = useState([]);
  const [destinyDDD, setDestinyDDD] = useState([]);
  const [selectedOrigin, setSelectedOrigin] = useState(undefined);
  const [selectedDestiny, setSelectedDestiny] = useState(undefined);

  const [callTime, setCallTime] = useState(null);
  const [callPlan, setCallPlan] = useState(undefined);

  const [valueWithPlan, setValueWithPlan] = useState([]);
  const [valueWithoutPlan, setValueWithoutPlan] = useState([]);

  const handleSelectedOrigin = useCallback(async (e) => {
    setSelectedOrigin(e.target.value);
    const response = await api.get(`/?originDDD=${e.target.value}`);
    setDestinyDDD(response.data.originMatches);
  }, []);

  const handleSelectedDestiny = useCallback(async (e) => {
    setSelectedDestiny(e.target.value);
    const response = await api.get(`/?destinyDDD=${e.target.value}`);
    setOriginDDD(response.data.destinyMatches);
  }, []);

  const handleConsultPrice = useCallback(async () => {
    const response = await api.get(
      `/consulta?originDDD=${selectedOrigin}&destinyDDD=${selectedDestiny}&callTime=${callTime}&callPlan=${callPlan}`
    );

    setValueWithPlan(response.data.valueWithPlan);
    setValueWithoutPlan(response.data.valueWithoutPlan);
  }, [callPlan, callTime, selectedDestiny, selectedOrigin]);

  const handleTimeInput = useCallback((e) => {
    if (e.target.value < 0) {
      toast.error("Insira um valor válido em minutos");
      return;
    }
    setCallTime(e.target.value);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get(`/`);

      setOriginDDD(response.data.origins);
      setDestinyDDD(response.data.destinies);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (selectedOrigin && selectedDestiny && callTime && callPlan) {
      handleConsultPrice();
    }
  }, [selectedOrigin, selectedDestiny, callTime, callPlan, handleConsultPrice]);

  return (
    <div>
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
              <div className="input-title-container">ORIGEM</div>
              <Select
                options={originDDD}
                label={"originDDD"}
                placeholder="DDD"
                onChange={handleSelectedOrigin}
                value={selectedOrigin}
              />
            </label>

            <label htmlFor="call-time">
              <div className="input-title-container">DURAÇÃO</div>
              <input
                id="call-time"
                type="number"
                placeholder="Minutos"
                onChange={handleTimeInput}
              />
            </label>

            <label htmlFor="destinyDDD">
              <div className="input-title-container">DESTINO</div>
              <Select
                options={destinyDDD}
                label="destinyDDD"
                placeholder="DDD"
                onChange={handleSelectedDestiny}
                value={selectedDestiny}
              />
            </label>
          </div>

          <div className="plan-input-container">
            <label htmlFor="call-plan">
              <div className="input-title-container">PLANO FALEMAIS</div>
              <Select
                options={[30, 60, 120]}
                label="call-plan"
                placeholder="Selecione seu plano"
                onChange={(e) => setCallPlan(e.target.value)}
                value={callPlan}
              />
            </label>
          </div>

          <div className="result-container">
            <div className="result-with-plan-container">
              <p>COM FALEMAIS</p>
              <div className="result-with-plan">
                <span>R$</span>
                <strong>
                  {(!!valueWithPlan.length && valueWithPlan) || "00,00"}
                </strong>
              </div>
            </div>
            <div className="result-without-plan">
              <div className="result-without-plan-container">
                <p>SEM FALEMAIS</p>
                <div className="result-without-plan">
                  <span>R$</span>
                  <strong>
                    {(!!valueWithoutPlan.length && valueWithoutPlan) || "00,00"}
                  </strong>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </main>
    </div>
  );
}

export default FaleMais;

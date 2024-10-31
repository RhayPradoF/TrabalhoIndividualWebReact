import React, { useState } from 'react';
import "./ImcCalculadora.css";

export default function ImcCalculadora() {

    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);
    const [imc, setImc] = useState(0);

    function calcularImc(){

        if (peso === 0 || peso === '' || peso < 0 || altura === 0 || altura === '' || altura < 0) {
            alert("Preencha todos os campos com valores válidos.");
            return;
        }

        const imcCalculado = (peso / (altura * altura));
        setImc(imcCalculado);
        
    }

  return (
    <div>
        <label htmlFor="peso">Digite seu Peso: (kg) </label>
        <input 
        type="number" 
        id='peso'
        onChange={event => setPeso(Number(event.target.value))} 
        placeholder="Peso em quilos: (kg)"/>
        <hr />

        <label htmlFor="altura">Digite sua Altura: (Metros) </label>
        <input 
        type="number" 
        id='altura'
        onChange={event => setAltura(Number(event.target.value))} 
        placeholder="Digite sua Altura:" />
        <hr />
        <button onClick={calcularImc}>Calcular IMC</button>

        <p>Seu IMC é: {imc.toFixed(2)}</p>

        {imc < 18.5 && <p>Você está abaixo do peso.</p>}
        {imc >= 18.5 && imc <= 24.9 && <p>Seu IMC está com eutrofia(peso adequado).</p>}
        {imc >= 25 && imc <= 29.9 && <p>Você está com sobrepeso.</p>}
        {imc >= 30 && imc <= 34.9 && <p>Você está com obesidade grau I.</p>}
        {imc >= 35 && imc <= 39.9 && <p>Você está com obesidade grau II.</p>}  
        {imc >= 40 && <p>Você está com obesidade grau III (extrema).</p>}    

    </div>
  );
}

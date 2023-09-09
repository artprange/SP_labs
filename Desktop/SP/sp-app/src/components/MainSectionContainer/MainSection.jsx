import React from "react";
import { solutions } from "../utils/constants";
import SmallBtn from "../UI/SmallButton/SmallBtn";
import "./styles.scss";

function MainSection() {
  return (
    <div className="main-section">
      <h1>
        Problemas complexos.<br></br>
        Soluções <span className="strike-through-word"> complexas</span>{" "}
        <span className="italic-word">criativas_</span>{" "}
      </h1>
      <h6>Confira nossos cases de sucesso que vão além do mundo jurídico.</h6>
      <div className="main-section__container">
        <div className="main-section__container__cards">
          {solutions.map((solution) => (
            <div key={solution.id} className="main-section__solutions">
              <h3>{solution.title}</h3>
              <p>{solution.text}</p>
              <SmallBtn text={"Saiba Mais"} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MainSection;

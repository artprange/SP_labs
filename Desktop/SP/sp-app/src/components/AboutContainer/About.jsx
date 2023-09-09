import React from "react";
import "./styles.scss";
import CustomVideo from "../VideoContainer/video";

function About() {
  return (
    <div className="about__container">
      <div className="about__container__text">
        <h1>Quem são, o que fazem, onde vivem?</h1>
        <p>
          Não precisa embedar o vídeo do Rick Astley Remastered 4K 60 FPS, pode
          ser qualquer outro vídeo da sua escolha, mas queremos dar play. Na
          estrutura de pastas nos chamamos as páginas de containers.
        </p>
      </div>
      <div className="about__container__video">
        <CustomVideo />
      </div>
    </div>
  );
}

export default About;

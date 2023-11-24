import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "2D Fiber Lazer Kesim",
          "Abkant Büküm",
          "Kaynak & Boya",
          "Giyotin Kesim",
          "Fiber Lazer Kesim ve Boru Kesimi",
          "Punch",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;

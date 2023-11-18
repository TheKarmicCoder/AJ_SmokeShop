import React, { useEffect } from "react";
import "../scss/smoketext.css";

function SmokeText() {
  useEffect(() => {
    const text = document.querySelector(".smokey-text h3");
    if (text) {
      text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");

      const letters = document.querySelectorAll(".smokey-text span");
      for (let i = 0; i < letters.length; i++) {
        letters[i].addEventListener("mouseover", function () {
          letters[i].classList.add("active");
        });
      }
    }
  }, []);

  return (
    <div className="smokey-text">
      <h3>MEMBERS ONLY Messaging</h3>
    </div>
  );
}

export default SmokeText;

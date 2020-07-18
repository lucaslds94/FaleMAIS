import React from "react";
import { FaPlus } from "react-icons/fa";

import "./styles.css";

function Header() {
  return (
    <nav>
      <div className="nav-container">
        <h2>
          FALE <FaPlus color={"#FFB800"} size={16} />
        </h2>
        <span>CALCULAR O VALOR DA LIGAÇÃO</span>
      </div>
    </nav>
  );
}

export default Header;

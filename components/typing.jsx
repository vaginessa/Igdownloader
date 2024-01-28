
"use client"

import React from "react";
import Typed from "typed.js";

const words = ["Saiyam Dubey", "Ayush Singh", "Shobhit Singh"];

class Typing extends React.Component {
  componentDidMount() {
    const options = {
      strings: words,
      typeSpeed: 80,
      backSpeed: 80,
      loop: true,
      cursorChar: " |",
    };
    this.typed = new Typed(this.el, options);
  }
  componentWillUnmount() {
    this.typed.destroy();
  }

  render() {
    return (
      <>
        <span
          style={{ whiteSpace: "pre" }}
          ref={(el) => {
            this.el = el;
          }}
        />
      </>
    );
  }
}
export default Typing;

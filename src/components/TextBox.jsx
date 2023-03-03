import "../Styles/main.less";
import React from "react";

export default function TextBox(props) {

  return (
    <div className="input-field">
      <input {...props} />
    </div>

    // <input
    //   {...props}
    // />
  );
}

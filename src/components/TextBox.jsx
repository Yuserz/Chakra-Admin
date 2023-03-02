import "../Styles/main.less";

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

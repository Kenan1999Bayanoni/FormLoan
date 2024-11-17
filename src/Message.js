import "./style.css";
export default function Message({ isVisible, error }) {
  if (isVisible) {
    return (
      <div className="perant">
        <div className="message flex">
          <h1 style={{ color: error ? "red" : "green" }}>
            {error ? error : "The Form Has Been Submitted Successfully"}
          </h1>
        </div>
      </div>
    );
  } else return <></>;
}

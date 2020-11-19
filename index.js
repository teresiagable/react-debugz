import React from "react";
const preStyle = {
  fontSize: "14px",
  backgroundColor: "#333",
  color: "#00FFFF",
  padding: "10px",
  border: "1px solid #000",
  display: "block",
  borderRadius: "3px",
};
const Debugz = (props) => {
  console.log("props sent to Debugz:", props);
  return <pre style={preStyle}>{JSON.stringify(props, null, 2)}</pre>;
};
export default Debugz;
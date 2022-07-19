import { useRef, useState } from "react";
import "./styles.css";

export default function App() {
  const myObj = {
    first_name: "Sagar",
    last_name: "Munot",
    age: 20
  };
  const [data, setData] = useState(myObj);
  const ageRef = useRef();
  const updateAge = () => {
    console.log(ageRef.current.value);
    setData({ ...data, age: ageRef.current.value });
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <input type="text" ref={ageRef} defaultValue={data.age} />
      <button onClick={updateAge}>Update Age</button>
      <h1>Emp Info</h1>
      <h3>Name : {data.first_name + " " + data.last_name}</h3>
      <h3>Age : {data.age}</h3>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

import React, {useState} from 'react'
import Header from "./components/header"
import Body from "./components/body"
import "antd/dist/antd.css"

function App() {
  const [state,setState] = useState({
    StateValue: {input1: "",
    input2: "",
    input3: ""},
    propsValue: ''
  })

  console.log(state)
  return (
    <div className="App">
      <Header/>
      <Body state={state} setState={setState}/>
    </div>
  );
}

export default App;

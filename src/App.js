import React, {useState} from 'react'
import Header from "./components/header"
import Body from "./components/body"

function App() {
  const [state,setState] = useState({})
  console.log(state)
  return (
    <div className="App">
      <Header/>
      <Body state={state} setState={setState}/>
    </div>
  );
}

export default App;

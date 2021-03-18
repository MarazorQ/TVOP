import React, {useState} from 'react'
import Header from "./components/header"
import Body from "./components/body"

function App() {
  const [state,setState] = useState(1)
  return (
    <div className="App">
      <Header/>
      <Body state={state} setState={setState}/>
    </div>
  );
}

export default App;

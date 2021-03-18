import {useState} from 'react'

const Input = (props) =>{
    const [state,setState] = useState({
        input1: "",
        input2: "",
        input3: ""
    })
    let handleButton = (e) =>{
        e.preventDefault();
        props.setState(state)
        console.log("pic-pic")
    }
    let handleChange = (e) =>{
        let text = e.target.value
        setState({...state,
            input1: text
        })
        console.log(text)
    }
    let handleChange1 = (e) =>{
        let text = e.target.value
        setState({...state,
            input2: text
        })
        console.log(text)
    }
    let handleChange2 = (e) =>{
        let text = e.target.value
        setState({...state,
            input3: text
        })
        console.log(text)
    }
    return(
        <div className="App-contener__item">
            <div className="item">
                <label>Длинна стороны 1</label>
                <input type="text" value={state.input1} onChange={handleChange} placeholder="input..."></input>
            </div>
            <div className="item">
                <label>Длинна стороны 2</label>
                <input type="text" value={state.input2} onChange={handleChange1} placeholder="inputs..."></input>
            </div>
            <div className="item">
                <label>Длинна стороны 3</label>
                <input type="text" value={state.input3} onChange={handleChange2} placeholder="inputs..."></input>
            </div>
            <hr/>
                <div className="item">
                <button onClick={handleButton}>Вычислить</button>
            </div>
            <hr/>
      </div>
    )
}
export default Input
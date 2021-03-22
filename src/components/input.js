import {useState} from 'react'
import {typeOfTriangle} from './../tests/triangleFunctionTests'

const Input = (props) =>{
    const [state,setState] = useState({
        input1: "",
        input2: "",
        input3: "",
        disabled: false,
        error: ""
    })
    let reset = () =>{
        setState({...state,
        input1: "",
        input2: "",
        input3: "",
        disabled: false,
        error: ""
        })
    }
    let handleButton = (e) =>{
        // e.preventDefault();
        if (state.input1 === "" || state.input2 === "" || state.input3 === ""){
            // state.disabled = true
            // state.error = "Вы заполниле не все поля!"
            setState({...state,
                disabled: true,
                error: "Вы заполниле не все поля!"
            })
            console.log("pic-pic")
        }else{
            let propsValue = typeOfTriangle(+state.input1, +state.input2, +state.input3)
        props.setState({...props.state,
            propsValue: propsValue
        })
        reset()
        console.log("pic-pic")
        }
    }
    let handleChange = (e) =>{
        let text = e.target.value
        setState({...state,
            input1: text,
            disabled: false,
            error: ""
         })
         props.setState({...props.state,
            propsValue: ''
        })
    }
    let handleChange1 = (e) =>{
        let text = e.target.value
        setState({...state,
            input2: text,
            disabled: false,
            error: ""
         })
         props.setState({...props.state,
            propsValue: ''
        })
    }
    let handleChange2 = (e) =>{
        let text = e.target.value
        setState({...state,
           input3: text,
           disabled: false,
           error: ""
        })
        props.setState({...props.state,
            propsValue: ''})
    }
    return(
        <div className="App-contener__item">
            <div className="item">
                <label>Длина стороны 1</label>
                <input type="number" value={state.input1} onChange={handleChange} placeholder="input..."></input>
            </div>
            <div className="item">
                <label>Длина стороны 2</label>
                <input type="number" value={state.input2} onChange={handleChange1} placeholder="inputs..."></input>
            </div>
            <div className="item">
                <label>Длина стороны 3</label>
                <input type="number" value={state.input3} onChange={handleChange2} placeholder="inputs..."></input>
            </div>
            <div>
                {state.error}
            </div>
            <hr/>
                <div className="item">
                <button id="button" onClick={handleButton} disabled={state.disabled} >Вычислить</button>
            </div>
            <hr/>
      </div>
    )
}
export default Input
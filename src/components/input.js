import {useState} from 'react'
import {typeOfTriangle} from './../tests/triangleFunctionTests'

const Input = (props) =>{
    const [state,setState] = useState({
        input1: {
            errorValue: "",
            inputValue: ""
        },
        input2: {
            errorValue: "",
            inputValue: ""
        },
        input3: {
            errorValue: "",
            inputValue: ""
        },
        disabled: false
    })

    let reset = () =>{
        setState({...state,
            input1: {
                errorValue: "",
                inputValue: ""
            },
            input2: {
                errorValue: "",
                inputValue: ""
            },
            input3: {
                errorValue: "",
                inputValue: ""
            },
            disabled: false
        })
    }
    let handleButton = (e) =>{
        if (state.input1.inputValue === "" || state.input2.inputValue === "" || state.input3.inputValue === ""){
            setState({...state,
                input1:{
                    errorValue: "Поле не заполнено"
                },
                input2: {
                    errorValue: "Поле не заполнено"
                },
                input3: {
                    errorValue: "Поле не заполнено"
                },
                disabled: true
                })
        }else{
            let propsValue = typeOfTriangle(+state.input1.inputValue, +state.input2.inputValue, +state.input3.inputValue)
            props.setState({...props.state,
                propsValue: propsValue
            })
        reset()
        }
    }
    let handleChange = (e) =>{
        let text = e.target.value
        setState({...state,
            input1: {
                inputValue: text,
                errorValue: ""
            },
            disabled: false
         })
         props.setState({...props.state,
            propsValue: ''
        })
    }
    let handleChange1 = (e) =>{
        let text = e.target.value
        setState({...state,
            input2: {
                inputValue: text,
                errorValue: ""
            },
            disabled: false
         })
         props.setState({...props.state,
            propsValue: ''
        })
    }
    let handleChange2 = (e) =>{
        let text = e.target.value
        setState({...state,
           input3: {
               inputValue: text,
               errorValue: ""
           },
           disabled: false
        })
        props.setState({...props.state,
            propsValue: ''})
    }
    return(
        <div className="App-contener__item">
            <div className="item">
                <label>Длина стороны 1</label>
                <input type="number" value={state.input1.inputValue} onChange={handleChange} placeholder="input..."></input>
                {state.input1.errorValue}
            </div>
            <div className="item">
                <label>Длина стороны 2</label>
                <input type="number" value={state.input2.inputValue} onChange={handleChange1} placeholder="inputs..."></input>
                {state.input2.errorValue}
            </div>
            <div className="item">
                <label>Длина стороны 3</label>
                <input type="number" value={state.input3.inputValue} onChange={handleChange2} placeholder="inputs..."></input>
                {state.input3.errorValue}
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
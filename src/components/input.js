import {useState} from 'react'
import {typeOfTriangle} from './../tests/triangleFunctionTests'
import {message} from "antd"

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

    const InputParts = (props) =>{
        return(
            <div className="form-group mx-sm-3 mb-2">
                <label className="lead">{props.title}</label>
                <input type="text" value={props.value} onChange={props.handleChange} placeholder="вводите..." className="form-control form-control-lg" pattern="[0-9]*"></input>
            </div>
        )
    }

    const Inputs = () => {
        return (
            <>
            <InputParts value={state.input1.inputValue} handleChange={handleChange} title="Длинна стороны 1"/>
            <InputParts value={state.input2.inputValue} handleChange={handleChange1} title="Длинна стороны 2"/>
            <InputParts value={state.input3.inputValue} handleChange={handleChange2} title="Длинна стороны 3"/>
            </>
        )
    }

    // let obj = {
    //     input1: {
    //         errorValue: "",
    //         inputValue: ""
    //     },
    //     input2: {
    //         errorValue: "",
    //         inputValue: ""
    //     },
    //     input3: {
    //         errorValue: "",
    //         inputValue: ""
    //     },
    //     disabled: true
    // }

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
    // let validate = (state) =>{
    //     for (let key in state){
    //         if (state[key].inputValue === ""){
    //             obj[key].errorValue = "Поле не заполнено!"
    //         }else{
    //             obj[key].errorValue = " "
    //         }
    //     }
    //     return obj
    // }
    let handleButton = (e) =>{
        if (state.input1.inputValue === "" || state.input2.inputValue === "" || state.input3.inputValue === ""){
            // setState({...state,
            //     input1:{
            //         errorValue: "Заполните форму!"
            //     },
            //     disabled: true
            //     })
            message.error("Заполните форму!")
        }else{
            let propsValue = typeOfTriangle(+state.input1.inputValue, +state.input2.inputValue, +state.input3.inputValue)
            props.setState({...props.state,
                propsValue: propsValue
            })
        reset()
        }
    }
    let handleChange = (e) =>{
        const text = (e.target.validity.valid) ? e.target.value : state.input1.inputValue
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
        const text = (e.target.validity.valid) ? e.target.value : state.input2.inputValue
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
        const text = (e.target.validity.valid) ? e.target.value : state.input3.inputValue
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
            <div className="form-group mx-sm-3 mb-2">
                <label className="lead">Длина стороны 1</label>
                <input type="text" value={state.input1.inputValue} onChange={handleChange} placeholder="вводите..." className="form-control form-control-lg" pattern="[0-9]*"></input>
            </div>
            <div className="form-group mx-sm-3 mb-2">
                <label className="lead">Длина стороны 2</label>
                <input type="text" value={state.input2.inputValue} onChange={handleChange1} placeholder="вводите..." className="form-control form-control-lg" pattern="[0-9]*"></input>
            </div>
            <div className="form-group mx-sm-3 mb-2">
                <label className="lead">Длина стороны 3</label>
                <input type="text" value={state.input3.inputValue} onChange={handleChange2} placeholder="вводите..." className="form-control form-control-lg" pattern="[0-9]*"></input>
            </div>
            <div className="form-group mx-sm-3 mb-2">
                <p className="text-danger lead">{state.input1.errorValue}</p>
            </div>
            <hr/>
            <div className="form-group mx-sm-3 mb-2">
                <button id="button" onClick={handleButton} disabled={state.disabled} className="btn btn-primary btn-lg btn-block" >Вычислить</button>
            </div>
            <hr/>
      </div>
    )
}
export default Input
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

    const InputParts = (props) =>{
        return(
            <div className="form-group mx-sm-3 mb-2">
                <label className="lead">{props.title}</label>
                <input type="number" value={props.value} onChange={props.handleChange} placeholder="вводите..." className="form-control form-control-lg"></input>
            </div>
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
            setState({...state,
                input1:{
                    errorValue: "Заполните форму!"
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
            <InputParts value={state.input1.inputValue} handleChange={handleChange} title="Длинна стороны 1"/>
            <InputParts value={state.input2.inputValue} handleChange={handleChange1} title="Длинна стороны 2"/>
            <InputParts value={state.input3.inputValue} handleChange={handleChange2} title="Длинна стороны 3"/>
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
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
            // debugger
            //     let a = validate(state)
            //     setState({...state,a})
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
                <label className="lead">Длина стороны 1</label>
                <input type="number" value={state.input1.inputValue} onChange={handleChange} placeholder="input..." className="form-control form-control-lg"></input>
                {/* {state.input1.errorValue} */}
            </div>
            <div className="item">
                <label className="lead">Длина стороны 2</label>
                <input type="number" value={state.input2.inputValue} onChange={handleChange1} placeholder="inputs..." className="form-control form-control-lg"></input>
                {/* {state.input2.errorValue} */}
            </div>
            <div className="item">
                <label className="lead">Длина стороны 3</label>
                <input type="number" value={state.input3.inputValue} onChange={handleChange2} placeholder="inputs..." className="form-control form-control-lg"></input>
                {/* {state.input3.errorValue} */}
            </div>
            <div>
                <p className="text-danger lead">{state.input1.errorValue}</p>
            </div>
            <hr/>
                <div className="item">
                <button id="button" onClick={handleButton} disabled={state.disabled} className="btn btn-primary btn-lg btn-block" >Вычислить</button>
            </div>
            <hr/>
      </div>
    )
}
export default Input
const Output = (props) =>{
    //let propsValue = props.state.StateValue.input1+props.state.StateValue.input2+props.state.StateValue.input3
    let handleButton = (e) =>{
        e.preventDefault()
        props.setState({...props.state,
            StateValue: {state:{
                input1: "",
                input2: "",
                input3: ""
            }},
            propsValue: ""
        })
    }
    return(
        <div className="App-contener_results">
            <div className="item">
                <input type="text" value={props.state.propsValue}></input>
            </div>
            <hr/>
            <div className="item">
                <button onClick={handleButton}>Reset</button>
            </div>
        </div>
    )
}
export default Output
const Output = (props) =>{
    //let propsValue = props.state.StateValue.input1+props.state.StateValue.input2+props.state.StateValue.input3
    return(
        <div className="App-contener_results">
            <div className="item">
                <input type="text" value={props.state.propsValue} readOnly className="form-control form-control-lg"></input>
            </div>
            <hr/>
        </div>
    )
}
export default Output
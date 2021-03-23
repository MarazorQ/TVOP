const Output = (props) =>{
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
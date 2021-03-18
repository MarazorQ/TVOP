const Output = (props) =>{
    return(
        <div className="App-contener_results">
            <div className="item">
                <input type="text" value={props.state.input1+props.state.input2+props.state.input3}></input>
            </div>
            <hr/>
            <div className="item">
                <button>Reset</button>
            </div>
        </div>
    )
}
export default Output
import Input from "./input"
import Output from "./output"

const Body = (props) =>{
    return(
        <div className="App-contener">
            <Input setState={props.setState} state={props.state}/>
            <Output state={props.state} setState={props.setState} />
      </div>
    )
}
export default Body
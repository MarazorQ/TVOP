import Input from "./input"
import Output from "./output"

const Body = (props) =>{
    return(
        <div className="App-contener">
            <Input setState={props.setState}/>
            <Output state={props.state}/>
      </div>
    )
}
export default Body
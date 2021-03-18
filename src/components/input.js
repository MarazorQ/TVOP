const Input = () =>{
    return(
        <div className="App-contener__item">
            <div className="item">
                <label>Длинна стороны 1</label>
                <input type="text"></input>
            </div>
            <div className="item">
                <label>Длинна стороны 2</label>
                <input type="text"></input>
            </div>
            <div className="item">
                <label>Длинна стороны 3</label>
                <input type="text"></input>
            </div>
            <hr/>
                <div className="item">
                <button>Вычислить</button>
            </div>
            <hr/>
      </div>
    )
}
export default Input
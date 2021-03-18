

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Определение вида треугольниика по заданным сторонам</h1>
       <hr/>
      </header>
      <div className="App-contener">
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
        <div className="App-contener_results">
          <div className="item">
            <input type="text"></input>
          </div>
          <hr/>
          <div className="item">
            <button>Reset</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

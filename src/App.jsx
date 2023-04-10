import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [data, setData] = useState([]);

  const consumirApi = async (url) => {
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      // console.log(data.results);
      setData(data);
    } catch (error) {
      console.log("Ocurrio un error: ", error);
    }
  };

  return (
    <div className="App">
      <h1>Rick and Morty API</h1>
      {!data.results ? (
        <button
          onClick={() =>
            consumirApi("https://rickandmortyapi.com/api/character")
          }
        >
          Consultar Api
        </button>
      ) : (
        <div className="container-fluid">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-6">
            {data.results && data.results.map((elem, i) => <Card key={i} datos={elem} />)}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

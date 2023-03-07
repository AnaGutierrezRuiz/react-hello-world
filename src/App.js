import "./App.css";
import Episode from "./components/Episode";
import Filters from "./components/Filters";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Filters />
        <Episode name="Episode 1" summary="Summary 1" />
        <Episode name="Episode 2" summary="Summary 2" />
        <Episode name="Episode 3" summary="Summary 3" />
      </div>
    </div>
  );
}

export default App;

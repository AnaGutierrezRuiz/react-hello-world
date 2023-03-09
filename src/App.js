import "./App.css";
import Button from "./components/Button";
import Episode from "./components/Episode";
import Filters from "./components/Filters";
import Navbar from "./components/Navbar";
import Section from "./components/Section";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Section title="Buttons">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid modi dolores eum, nesciunt iure delectus quae perferendis sapiente labore facilis explicabo dignissimos, distinctio quam doloribus sunt pariatur, ad dolor non.</p>
          <Button text="click me" className="mb-1" icon="user" />
          <Button text="click me 2" mode="danger" />
        </Section>

        <Section title="Episodes">
          <Episode name="Episode 1" summary="Summary 1" />
          <Episode name="Episode 2" summary="Summary 2" />
          <Episode name="Episode 3" summary="Summary 3" />
          <Filters />
        </Section>
        
      </div>
    </div>
  );
}

export default App;

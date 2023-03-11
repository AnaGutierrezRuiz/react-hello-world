import "./App.css";
import Button from "./components/Button";
import Counter from "./components/counter/Counter";
import EpisodeList from "./components/episodes/EpisodeList";
import Filters from "./components/Filters";
import Navbar from "./components/Navbar";
import Section from "./components/Section";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Section className="mb-5" title="Buttons">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid modi dolores eum, nesciunt iure delectus quae perferendis sapiente labore facilis explicabo dignissimos, distinctio quam doloribus sunt pariatur, ad dolor non.</p>
          <Button text="click me" className="mb-1" icon="user" />
          <Button text="click me 2" mode="danger" />
        </Section>

        <Section className="mb-5"  title="Components with State">
          <div className="d-flex gap-2">
            <Counter min={0} max={5} />
            <Counter min={-5} max={10} />
          </div>
        </Section>

        <Section className="mb-5" title="Loops and useEffect">
          <EpisodeList />
          <Filters />
        </Section>
        
      </div>
    </div>
  );
}

export default App;

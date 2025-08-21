import "./App.css";
import { contents } from "./assets/data/data";
import Content from "./components/Content";
import Header from "./components/Header";

function App() {
  return (
    <main>
      <Header />
      <section className="flex flex-wrap justify-center gap-5 px-10 py-5">
        {contents.map((el, idx) => (
          <Content key={el.id} content={el} index={idx} />
        ))}
      </section>
    </main>
  );
}

export default App;

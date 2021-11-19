import InputField from "./InputField/InputFile";
import OutputField from "./OutputField/OutputField";
import "./App.css"

function App() {
  return (
    <div>
       <section id="goal-form">
      <InputField/>
      </section>

      <section id="goal-form">
      <OutputField/>
      </section>
    </div>
  );
}

export default App;

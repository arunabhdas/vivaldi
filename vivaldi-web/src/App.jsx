import {createSignal} from "solid-js";
function App() {
  const [keyword, setKeyword] = createSignal("Anachron")
  return (
    <div class="container">
      <h1>Welcome to Vivaldi</h1>
      <input onKeyUp={(e) =>
      setKeyword(e.currentTarget.value)}
      type="text" />
      <p> { keyword }</p>
    </div>
  );
}

export default App;

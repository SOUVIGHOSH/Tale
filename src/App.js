import "./App.css";
import Appbar from "./component/Appbar";
import Post from "./component/Post";

function App() {
  return (
    <div className="App">
      <Appbar />
      <main>
        <Post />
      </main>
    </div>
  );
}

export default App;

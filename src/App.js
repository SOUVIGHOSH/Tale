import "./App.css";
import Appbar from "./component/Appbar";
import Post from "./component/Post";
import Feed from "./component/feed";

function App() {
  return (
    <div className="App">
      <Appbar />
      <main>
        <Post />
        <Feed />
      </main>
    </div>
  );
}

export default App;

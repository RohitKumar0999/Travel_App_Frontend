import "./App.css";
import { Home } from "./pages";
import { CategoryProvider } from "./components";

function App() {
  return (
    <div className="App">
      <CategoryProvider>
        <Home />
      </CategoryProvider>
    </div>
  );
}

export default App;

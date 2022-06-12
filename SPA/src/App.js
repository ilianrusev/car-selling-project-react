import { BrowserRouter } from "react-router-dom";
import style from "./App.module.css"
import AppRouter from "./components/Router/Router";

function App() {
  return (
    <BrowserRouter>
      <div className={style['main-wrapper']} >
        <AppRouter />
      </div>
    </BrowserRouter>
  );
}

export default App;

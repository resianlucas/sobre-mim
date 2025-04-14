import Banner from "components/Banner";
import Menu from "components/Menu";
import Posts from "components/Posts";
import Rodape from "components/Rodape";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <main>
        <Banner />
        <Posts />
      </main>
      <Rodape />
    </BrowserRouter>
  );
}

export default App;

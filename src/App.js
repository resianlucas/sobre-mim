import Banner from "components/Banner";
import Menu from "components/Menu";
import Posts from "components/Posts";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <main>
        <Banner />
        <Posts />
      </main>

    </BrowserRouter>
  );
}

export default App;

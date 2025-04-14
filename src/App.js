import Banner from "components/Banner";
import Menu from "components/Menu";
import Posts from "components/Posts";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Banner />
      <Posts />

    </BrowserRouter>
  );
}

export default App;

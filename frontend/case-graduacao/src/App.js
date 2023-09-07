import Provider from "./context/Provider";
import { GlobalStyle } from "./globalStyled";
import Routers from "./routers/Routers";


function App() {
  return (
    <Provider>
        <GlobalStyle />
        <Routers />
    </Provider>
  );
}

export default App;

import Provider from "./context/Provider";
import { GlobalStyle } from "./globalStyled";
import Routers from "./routers/Routers";
import { StyleSheetManager } from 'styled-components';


function App() {
  return (
    <StyleSheetManager shouldForwardProp={(prop) => prop !== 'visible'}>
    <Provider>
        <GlobalStyle />
        <Routers />
    </Provider>
    </StyleSheetManager>
  );
}

export default App;

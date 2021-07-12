import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";

import "./App.css";
import Route from "./component/route";
import { history, store } from "./utils/Store";
function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div className="App">
          <Route />
        </div>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;

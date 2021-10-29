import Header from "./container/Header";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import ProductDetails from "./container/ProductDetails";
import Home from "./container/home";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/product/:productId" exact component={ProductDetails}/>
          <Route>404 Not Found</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

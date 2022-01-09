import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./Pages/About";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            {/* Header */}
            <Header />

            {/* Main Page */}
            <Main />
            {/* //Footer */}
            <Footer />
          </Route>
          <Route path="/About">
            <About />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;

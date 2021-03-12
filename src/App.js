import React from "react";
import { TodoPage, LoginPage } from "./pages/index.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles.js";
import { TodosProvider } from "./context/context";

function App() {
  return (
    <TodosProvider>
      <Router>
        <GlobalStyles />
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/todo" component={TodoPage} />
      </Router>
    </TodosProvider>
  );
}

export default App;

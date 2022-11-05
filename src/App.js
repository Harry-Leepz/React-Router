import { Route } from "react-router-dom";

import Welcome from "./components/Welcome";
import Products from "./components/Products";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Route path='/welcome'>
          <Welcome />
        </Route>
        <Route path='/products'>
          <Products />
        </Route>
      </main>
    </div>
  );
}

export default App;

// localhost/welcome => Welcome Component
// localhost/products => Products Component

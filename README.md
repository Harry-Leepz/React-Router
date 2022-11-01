# **Routing with React**

## **Installing React Router using npm!**

_Version 5_

```
  npm install react-router-dom@5
```

---

## **Importing the Route component!**

_Route is a component provided by the React router Dom package that allows us to define a path, and which component should be rendered when that path is active. Similar to an active nav link._

```
  import { Route } from 'react-router-dom';
```

### **Creating Routes**

_To create a Route to a component page, simply wrap the Route component around the Component that will be shown in that url path._

In this example we have two routes, `/welcome` and `/products`

```
function App() {
  return (
    <div>
      <Header />
      <Route path='/welcome'>  // welcome route
        <Welcome />
      </Route>
      <Route path='/products'>  // products route
        <Products />
      </Route>
    </div>
  );
}
```

---

## **Importing Browser Router and wrapping our App!**

_To actually get our routes unlocked and working, we'll firstly need to wrap our App with the Browser Router Component. BrowserRouter is a router implementation that uses the HTML5 history API(pushState, replaceState and the popstate event) to keep your UI in sync with the URL._

```
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

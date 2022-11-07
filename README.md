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

---

## **Creating Links to our Routes**

_Creating a link to our routes is very similar to how it is done in traditional HTML with the anchor tag. Except we use the Link component and use the "to" prop instead of the href attribute._

Here we create a Header with links to our `/welcome `and `/products` pages.

```
const Header = () => {
  return (
    <header>
      <nav>
        <ul>

          <li>
            <Link to='/welcome'>Welcome</Link>
          </li>

          <li>
            <Link to='/products'>Products</Link>
          </li>

        </ul>
      </nav>
    </header>
  );
};
```

---

## **Redirecting The User using Routes**

_Sometimes you may want to redirect a user to a certain page you have, it could be the home page. This can easily be implemented using `Redirect` from `react-router-dom`._

- In this example we'll redirect the user to the `/welcome` route after they open the app.

```
import { Route, Switch, Redirect } from "react-router-dom";


  <Switch>
    <Route path='/' exact>
      <Redirect to='/welcome' />
    </Route>

    <Route path='/welcome'>
      <Welcome />
    </Route>
  </Switch>

```

- Notice how the pth in the route is set match with the `exact` prop, and nested withing is the `Redirect` component with a path to the route we wish to show.

---

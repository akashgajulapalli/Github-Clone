import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import UserPage from "./components/userPage";

function App() {
  const username = prompt('Enter a Github User Name');
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/:userName" component={UserPage} />
        <Redirect to={`/${username}`} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { userRoutes } from "./routes/userRoutes/userRoutes";
import SpinnerComponent from "./components/SpinnerComponent/SpinnerComponent";
function App() {
  return (
    <div className="App">
      <SpinnerComponent />
      <BrowserRouter>
        <Routes>
          {userRoutes.map((route, index) => {
            if (route.isUseLayout) {
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={route.component}
                ></Route>
              );
            }
            return (
              <Route key={index} path={route.path} element={route.component} />
            );
          })}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

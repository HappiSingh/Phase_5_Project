
import './App.css';
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <h1>  Hello Sir</h1>
      {/* <Routes>
        <Route
          path={"/productions/new"}
          element={
            <div>
              <NewProductionForm addProduction={addProduction} />
            </div>
          }
        />
        <Route path={"/productions/:id"} element={<ProductionDetail />} />
        <Route
          path={"/authentication"}
          element={
            <div>
              <Authentication updateUser={updateUser}/>
            </div>
          }
        />
        <Route
          path={"/"}
          element={
            <div>
              <Home productions={productions} />
            </div>
          }
        />
        <Route
          path={"*"}
          element={
            <>
              <h1>Sorry We can't find the Page you're looking for!</h1>
              <h1>404 Not Found</h1>
            </>
          }
        />
      </Routes> */}
    </>
  );
}

export default App;
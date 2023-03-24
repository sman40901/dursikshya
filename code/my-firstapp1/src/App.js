// import First from "./First"
// import Second from "./Second";


// function App(props) {
//   const currDate = new Date();
//   return (
//     <div>
//       <h1>Hello, world!</h1>
//       <First/>
//       <Second/>
//     </div>
//   );
// }

import Layouts from "./components/Layouts";
import MyRoutes from "./MyRoutes";
import NavMenu from "./NavMenu";
import Home from "./pages/Home";
// import { createStore } from "redux"; // to make compiler recognize the reducer as a store
import { Provider } from "react-redux";// provider is used to pass data from reducer to component
// import cartReducer from "./redux/reducers/cartReducer";
import store from './store';

const App = (props) => {
  // const store = createStore(cartReducer); // to make recognize cart reducer 
  const currDate = new Date();
  return (
    // {/* <> */ }
    // {/* wrapping store to provider so that it can be used everywhere */ }
    <Provider store={store}>
      <MyRoutes />
    </Provider>

    //     {/* <NavMenu/> */ }
    // {/* <Layouts/> */ }
    // {/* <Home/> */ }
    //   {/* </> */}
  );
}
export default App;
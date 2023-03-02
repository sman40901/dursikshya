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
// import MyRoutes from "./MyRoutes";
import NavMenu from "./NavMenu";
import Home from "./pages/Home";

const App=(props)=> {
  const currDate = new Date();
  return (
    <>
      {/* <MyRoutes/> */}
      {/* <NavMenu/> */}
      {/* <Layouts/> */}
      <Home/>
    </>
  );
}
export default App;
import First from "./First"
import Second from "./Second";


function App(props) {
  const currDate = new Date();
  return (
    <div>
      <h1>Hello, world!</h1>
      <First/>
      <Second/>
    </div>
  );
}
export default App;
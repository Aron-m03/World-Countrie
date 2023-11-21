import Dependency from "./Components/Dependency";
import MyComponent from "./Components/Apitest";
import Conditionality from "./Components/FetchData1";
import "./App.css"

function App(){
  return(
    <div className="container">
     
      {<MyComponent/>}
    </div>
  )
}

export default App;
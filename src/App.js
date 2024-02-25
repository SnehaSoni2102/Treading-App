import { NavBar } from "./components/NavBar";
import div from "../src/Assets/div.svg"
import TradingViewWidget from "./components/TradingViewWidget";
import { KoinXFreeCard } from "./components/Body/koinXFreeCard";

function App() {
  return (
    <div className="bg-gray-100">
       <NavBar />
      {/* <div className="bg-red-100">
         <TradingViewWidget /> 
      </div> */}
      <div className="flex flex-wrap justify-center m-[56px]">
        <div ><img  src={div} alt="trade" style={{height:711, width:881}} /></div>
        <div>
        <KoinXFreeCard />
      </div>
      </div>
    </div>
  );
}

export default App;

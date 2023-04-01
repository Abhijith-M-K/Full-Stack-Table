import {
  BrowserRouter as Router,
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import AddOrderForm from "./Components/AddForm/Form";
import CompletedOrder from "./Components/CompleteTable/CompleteTable";
import PendingOrderTable from "./Components/PendingTable/PendingTable";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={Home} />
        {/* <Route path="/pending" element={PendingOrderTable} />
        <Route path="/completed" element={CompletedOrder} />
        <Route path="/order" element={AddOrderForm} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

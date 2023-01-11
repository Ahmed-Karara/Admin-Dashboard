import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import MainContenet from "./components/MainContenet/MainContenet";
import Orders from "./components/Orders/Orders";
import Products from "./components/Products/Products";
import RecentActivity from "./components/RecentActivity/RecentActivity";
import Analytics from "./components/Analytics/Analytics";
import Customers from "./components/Customers/Customers";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="container">
        <BrowserRouter>
          <Sidebar />
          <Routes>
            <Route path="/*" element={<MainContenet />}></Route>
            <Route path="Orders" element={<Orders />}></Route>
            <Route path="Customers" element={<Customers />}></Route>
            <Route path="Products" element={<Products />}></Route>
            <Route path="Analytics" element={<Analytics />}></Route>
          </Routes>
        </BrowserRouter>
        <RecentActivity />
      </div>
    </div>
  );
}

export default App;

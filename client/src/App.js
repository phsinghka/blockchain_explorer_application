import logo from "./logo.svg";
import "./App.css";
import NavigationBar from "./routes/navigation/navigation.components";
import Transaction from "./routes/transactions/transaction.component";
import Addresses from "./routes/addresses/addresses.component";
import Wallet from "./routes/wallet/wallet.component";
import Transfer from "./routes/transfer/transfer.component";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NavigationBar />}>
          <Route path="/transactions" element={<Transaction />} />
          <Route path="/addresses/:addressHash" element={<Transfer />} />
          <Route path="/addresses" element={<Addresses />} />
          <Route path="/wallet" element={<Wallet />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

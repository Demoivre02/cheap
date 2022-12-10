import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./pages/home";
import Signup from "./pages/signup";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import BuyData from "./pages/buyData";
import BuyAirtime from "./pages/buyAirtime";
import Education from "./pages/education";
import Internet from "./pages/internet";
import PayBills from "./pages/payBills";
import Printing from "./pages/printing";
import Subscription from "./pages/subscription";
import Withdraw from "./pages/withdraw";
import FundWallet from "./pages/fundWallet";
import ToCash from "./pages/toCash";
import Dstv from "./billsPages/Dstv";
import Gotv from "./billsPages/Gotv";
import NECO from "./billsPages/Neco";
import PayAedc from "./billsPages/payAedc";
import PayEedc from "./billsPages/payEedc";
import PayEkdc from "./billsPages/payEkdc";
import PayIbedc from "./billsPages/payIbedc";
import PayIkedc from "./billsPages/payIkedc";
import PayJed from "./billsPages/payJed";
import PayKaedco from "./billsPages/payKaedco";
import PayKedco from "./billsPages/payKedco";
import PayPhed from "./billsPages/payPhed";
import PayYedc from "./billsPages/payYedc";
import Startimes from "./billsPages/Startimes";
import UTME from "./billsPages/Utme";
import WAEC from "./billsPages/Waec";
import Coolink from "./billsPages/coolink";
import Smilebundle from "./billsPages/smilebundle";
import Spectranet from "./billsPages/spectranet";
import TransactionPage from "./pages/Transaction";
import Settings from "./pages/settings";
import SettingsProfile from "./pages/settingsProfile";
import SettingsPassword from "./pages/settingsPassword";
import SettingsPin from "./pages/settingsPin";
import Analytics from "./pages/analysis";
import Faq from "./pages/Faq";
import Admin from "./pages/Admin";
import AdminPassword from "./pages/AdminPassword";
import AdminPin from "./pages/AdminPin";
import ManageMembers from "./pages/managemembers";
import AdminPasswordsettings from "./AdminPages/adminPassword";
import Adminpinsettings from "./AdminPages/adminPin";
import CreditUser from "./AdminPages/creditUser";
import EditUser from "./AdminPages/editUser";
import Userhistory from "./AdminPages/userHistory";
import AdminTransaction from "./pages/AdminTransaction";


function App() {
  return (
    <Router>
    <div className="App">
    
    {/* MAIN-PAGES */}
    <Routes>
      <Route exact path="/signup" element={<Signup/>}/>
      <Route exact path="/" element={<Home/>}/>
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route exact path="/login" element={<Login/>} />
      <Route path="/transaction" element={<TransactionPage/> }/>
      <Route path="/settings" element={<Settings/>}/>
      <Route path="/analytics" element={<Analytics/>}/>
      <Route path="/faq" element={<Faq/>}/>
      <Route path="/admin" element={<Admin/>} />
    </Routes>

    {/* QUICK-PAGES */}
    <Routes>
        <Route path="/buydata" element={<BuyData/>}/>
        <Route path="/buyairtime" element={<BuyAirtime/>} />
        <Route path="/paybills" element={<PayBills/>}/>
        <Route path="/subscription" element={<Subscription/>}/>
        <Route path="/education" element={<Education/>}/>
        <Route path="/internet" element={<Internet/>} />
        <Route path="/printing" element={<Printing/>} />
        <Route path="/airtimeToCash" element={<ToCash/>}/>
        <Route path="/withdraw" element={<Withdraw/>}/>
    </Routes>

    {/* PAYMENT-LINKS */}
    <Routes>
      <Route path="/fundwallet" element={<FundWallet/>}/>
      <Route path="/payDstv" element={<Dstv/>}/>
      <Route path="/payGotv" element={<Gotv/>}/>
      <Route path="/payStartimes" element={<Startimes/>}/>
      <Route path="/payWaec" element={<WAEC/>}/>
      <Route path="/payNeco" element={<NECO/>}/>
      <Route path="/payUtme" element={<UTME/>}/>
      <Route path="/payaedc" element={<PayAedc/>}/>
      <Route path="/payekdc" element={<PayEkdc/>}/>
      <Route path="/payeedc" element={<PayEedc/>}/>
      <Route path="/payibedc" element={<PayIbedc/>}/>
      <Route path="/payikedc" element={<PayIkedc/>}/>
      <Route path="/payjed" element={<PayJed/>}/>
      <Route path="/paykaedco" element={<PayKaedco/>}/>
      <Route path="/paykedco" element={<PayKedco/>}/>
      <Route path="/payphed" element={<PayPhed/>}/>
      <Route path="/payyedc" element={<PayYedc/>}/>
      <Route path="/paySpectranet" element={<Spectranet/>}/>
      <Route path="/payCoolink" element={<Coolink/>}/>
      <Route path="/paySmilebundle" element={<Smilebundle/>}/>
    </Routes>

    {/* SETTINGS-PAGES */}
    <Routes>
      <Route path="/profile" element={<SettingsProfile/>} />
      <Route path="/ChangerUserPassword" element={<SettingsPassword/>} />
      <Route path="/ChangePin" element={<SettingsPin/>} />
    </Routes>

    {/* ADMIN-PAGES */}
    <Routes>
      <Route path="/adminPassword" element={<AdminPassword/>} />
      <Route path="/adminPin"  element={<AdminPin/>}/>
      <Route path="/managemembers" element={<ManageMembers/>}/>
      <Route path="/admintransaction" element={<AdminTransaction/>}/>
    </Routes>

    {/* ADMIN-POPUP-PAGES */}

    <Routes>
      <Route path="/creditUser" element={<CreditUser/>}/>
      <Route path="/editUser" element={<EditUser/>}/>
      <Route path="/adminUserPassword" element={<AdminPasswordsettings/>}/>
      <Route path="/adminUserPin" element={<Adminpinsettings/>}/>
      <Route path="/Userhistory" element={<Userhistory/>}/>
    </Routes>

    

    </div>
    </Router>
  );
}

export default App;

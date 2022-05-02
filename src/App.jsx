import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/common/Header';
import HeaderNew from './components/common/HeaderNew';
import {
  About,
  Contact,
  Home,
  Services,
  SignIn,
  SignUp,
  Socios,
} from './components/pages';

function App() {
  return (
    <>
      <HeaderNew />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/nosotros" element={<About />} />
        <Route path="/socios" element={<Socios />} />
        <Route path="/servicios" element={<Services />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-up" element={<SignIn />} />
      </Routes>
    </>
  );
}

export default App;

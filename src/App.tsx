import MainPage from './pages/MainPage/MainPage';
import { Routes, Route } from "react-router-dom";
import { Navbar } from './Components/UI/Navbar/Navbar';
import { NavLink } from 'react-router-dom';
import './styles/App.module.scss';

function App() { 

    //  async function fetch() {
    //   let response = await axios.get("http://localhost:8080/movies")
    //   console.log(response.data);
    // }
    // fetch();

  return (
    <div className="App">
      <Navbar />
      {/* <NavLink to="main">main</NavLink> */}
      <Routes>
         <Route path="*" element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;

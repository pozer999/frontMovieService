import './styles/App.module.scss';
import { Navbar } from "./widgets/Navbar/UI/Navbar";
import { Layout, Row } from "antd";
import Routing from "./Routing/Routing";


function App() { 

    //  async function fetch() {
    //   let response = await axios.get("http://localhost:8080/movies")
    //   console.log(response.data);
    // }
    // fetch();

  return (
    <div className="App">
      <Layout.Header className="headerNavbar" style={{backgroundColor: "rgb(15, 15, 15)"}}>
          <Row justify="start" align="middle">
              <Navbar/>
          </Row>
      </Layout.Header>

      <Layout.Content>
         <Row justify="center">
            <Routing/>
         </Row>
      </Layout.Content>

      <Layout.Footer style={{textAlign: "center"}}>
       FOOTER
      </Layout.Footer>
      {/* <NavLink to="main">main</NavLink> */}
     
    </div>
  );
}

export default App;

import './styles/App.module.scss';
import { Navbar } from "./widgets/Navbar/UI/Navbar";
import { ConfigProvider, Layout, Row, theme } from "antd";
import Routing from "./Routing/Routing";


function App() { 

    //  async function fetch() {
    //   let response = await axios.get("http://localhost:8080/movies")
    //   console.log(response.data);
    // }
    // fetch();

  return (
    <div className="App">
      <ConfigProvider theme={{ algorithm: theme.defaultAlgorithm, }}>
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
     </ConfigProvider>
    </div>
  );
}

export default App;

import './styles/App.module.scss';
import { Navbar } from "./widgets/Navbar/UI/Navbar";
import { ConfigProvider, Layout, Row, theme } from "antd";
import Routing from "./Routing/Routing";
import { useState } from 'react';


type ThemeData = {
  borderRadius: number;
  colorPrimary: string;
};

const defaultData: ThemeData = {
  borderRadius: 6,
  colorPrimary: 'rgb(184, 178, 178)',
};

function App() { 

    //  async function fetch() {
    //   let response = await axios.get("http://localhost:8080/movies")
    //   console.log(response.data);
    // }
    // fetch();

    const [data, setData] = useState<ThemeData>(defaultData);

  return (
    <ConfigProvider theme={{algorithm: theme.darkAlgorithm, token: {colorPrimary: data.colorPrimary}}}>
    <div className="App">
      
      <Layout.Header className="headerNavbar" style={{backgroundColor: "rgb(15, 15, 15)"}}>
          <Row justify="end" align="middle">
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
    </ConfigProvider>
  );
}

export default App;

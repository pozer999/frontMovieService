import './styles/App.module.scss';
import { Navbar } from "./widgets/Navbar/UI/Navbar";
import { ConfigProvider, Layout, Row, Switch, theme } from "antd";
import Routing from "./Routing/Routing";
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { RoutePath } from './Routing/Pages';


type ThemeData = {
  borderRadius: number;
  colorPrimary: string;
};

const primary: ThemeData = {
  borderRadius: 6,
  colorPrimary: 'rgb(184, 178, 178)',
};
const lime: ThemeData = {
  borderRadius: 12,
  colorPrimary: 'rgb(0, 255, 0)',
  
};

function App() { 

    //  async function fetch() {
    //   let response = await axios.get("http://localhost:8080/movies")
    //   console.log(response.data);
    // }
    // fetch();

    const [data, setData] = useState<ThemeData>(primary);

    const onChange = (checked: boolean) => {
      checked ? setData(() => primary) : setData(() => lime)
    };

  return (
    <ConfigProvider theme={{algorithm: theme.darkAlgorithm, token: {colorPrimary: data.colorPrimary}, components:{Button:{colorBorder: "red"}}}}>
    <div className="App">
      <Layout.Header className="headerNavbar" style={{backgroundColor: "rgb(15, 15, 15)"}}>
          <Row justify="space-between" align="middle" style={{height: "50px"}}>
            <NavLink to={RoutePath.MAIN} style={{height: "50px"}}>
              <img src='../image/movie.png' alt="" style={{height: "100%"}}/>
            </NavLink>
              <Navbar />
          </Row>
          <Switch defaultChecked onChange={onChange} style={{background: "rgb(41, 41, 41)"}}/>
      </Layout.Header>



      <Layout.Content>
         <Row justify="center" style={{marginBottom: 30}}>
            <Routing/>
         </Row>
      </Layout.Content>     
    </div>
    </ConfigProvider>
  );
}

export default App;

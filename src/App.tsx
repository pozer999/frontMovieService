import './styles/App.module.scss';
import { Navbar } from './widgets/Navbar/ui/Navbar';
import { ConfigProvider, Layout, Row, Switch, theme } from 'antd';
import Routing from './Routing/Routing';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { RoutePath } from './shared/config/routeConfig';

import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:8080/';

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
	const [data, setData] = useState<ThemeData>(primary);

	const onChange = (checked: boolean) => {
		checked ? setData(() => primary) : setData(() => lime);
	};

	return (
		<ConfigProvider
			theme={{
				algorithm: theme.darkAlgorithm,
				token: { colorPrimary: data.colorPrimary },
				components: { Button: { colorBorder: 'red' } },
			}}>
			<div className='App'>
				<Layout.Header
					className='headerNavbar'
					style={{ backgroundColor: 'rgb(15, 15, 15)' }}>
					<Row
						justify='space-between'
						align='middle'
						className='RowHeaderNavbar'
						style={{ height: '50px' }}>
						<NavLink
							to={RoutePath.MAIN}
							style={{ height: '50px' }}>
							<img
								src='../image/movie.png'
								alt=''
								style={{ height: '100%' }}
							/>
						</NavLink>
						<NavLink to={RoutePath.CURRENTFILM}>Current film</NavLink>
						<NavLink to={RoutePath.USERACCOUNT}>User Account</NavLink>{' '}
						<Switch
							defaultChecked
							onChange={onChange}
							style={{ background: 'rgb(41, 41, 41)' }}
						/>
						<Navbar />
					</Row>
				</Layout.Header>

				<Layout.Content>
					<Row
						justify='center'
						style={{ marginBottom: 30 }}>
						<Routing />
					</Row>
				</Layout.Content>
			</div>
		</ConfigProvider>
	);
}

export default App;

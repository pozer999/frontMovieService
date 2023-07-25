import { Col, Layout, Row } from 'antd';

const UserAccount = () => {
	const style: React.CSSProperties = { background: '#0092ff', padding: '8px 0' };
	return (
		<Layout.Content style={{ marginTop: 50 }}>
			<Row>
				<Col
					style={style}
					span={8}>
					Film stories
				</Col>
			</Row>
			<Row>
				<Col
					style={style}
					span={3}
					offset={2}>
					Favorites
				</Col>
				<Col
					style={style}
					span={3}
					offset={2}>
					Watch later
				</Col>
				<Col
					style={style}
					span={3}
					offset={2}>
					Settings
				</Col>
			</Row>
		</Layout.Content>
	);
};

export default UserAccount;

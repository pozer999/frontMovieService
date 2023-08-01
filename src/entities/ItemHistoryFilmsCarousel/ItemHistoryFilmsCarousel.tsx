import { Progress } from 'antd';
import React from 'react';
import { memo } from 'react';

interface IitemHistoryFilmsCarousel {
	item: string;
}

const ItemHistoryFilmsCarousel = ({ item }: IitemHistoryFilmsCarousel) => {
	return (
		<>
			<img
				style={{ height: '95%', borderRadius: 5, width: 400, zIndex: 1, position: 'relative', cursor: "pointer" }}
				src={item}
				alt='film'
			/>
			<Progress
				style={{ zIndex: 2, width: 400, position: 'absolute', bottom: 0, left: 0, height: 4 }}
				percent={Math.random() * (90 - 30) + 30}
				showInfo={false}
			/>
		</>
	);
};

export default memo(ItemHistoryFilmsCarousel);

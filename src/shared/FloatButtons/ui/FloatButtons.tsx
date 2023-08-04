import { FloatButton } from 'antd';
import { EyeOutlined, HeartOutlined, SettingOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { memo, useCallback } from 'react';
import { openModalFavourites, openModalSettings, openModalWatchLater } from '../../../store/modalFavouritesAndWatchLaterAndSettingsReducer';

export const FloatButtons = memo(() => {
	const dispatch = useDispatch();
	const handleOpenModalFavourites = useCallback(() => {
		dispatch(openModalFavourites());
	}, [dispatch]);
	const handleOpenModalWatchLater = useCallback(() => {
		dispatch(openModalWatchLater());
	}, [dispatch]);
	const handleOpenModalSettings = useCallback(() => {
		dispatch(openModalSettings());
	}, [dispatch]);
	return (
		<FloatButton.Group
			shape='circle'
			style={{ right: 24 }}>
			<FloatButton
				onClick={handleOpenModalFavourites}
				tooltip={<div>Favorites</div>}
				icon={<HeartOutlined />}
			/>
			<FloatButton
				onClick={handleOpenModalWatchLater}
				tooltip={<div>Watch later</div>}
				icon={<EyeOutlined />}
			/>
			<FloatButton
				onClick={handleOpenModalSettings}
				tooltip={<div>Settings</div>}
				icon={<SettingOutlined />}
			/>
		</FloatButton.Group>
	);
});

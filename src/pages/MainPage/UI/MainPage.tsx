import { useSelector } from 'react-redux';
import { MainContainer } from '../../../widgets/MainContainer/ui/MainContainer';
import { useEffect } from 'react';
const MainPage = () => {
  const filters = useSelector((state: any) => state.films.filter);

  useEffect(() => {
    console.log("filters: ", filters);
  }, [filters]);

  return (
    
    <div>
      <MainContainer />
    </div>
  );
};

export default MainPage;

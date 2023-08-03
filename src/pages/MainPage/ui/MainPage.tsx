import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { MainContainer } from 'widgets/MainContainer';


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

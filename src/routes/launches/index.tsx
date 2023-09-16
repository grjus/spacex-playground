import { Outlet, useMatch } from 'react-router-dom';
import LaunchesTable from '../../components/launch/LaunchesTable';

const Launches = () => {
  const match = useMatch('/launches/:launchId');

  return (
    <>
      {!match && <LaunchesTable />}
      <Outlet />
    </>
  );
};

export default Launches;

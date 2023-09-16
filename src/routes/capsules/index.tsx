import { useLoaderData } from 'react-router-dom';

import { Capsule } from '../../api';

const Capsules = () => {
  const data = useLoaderData() as Capsule[];

  return (
    <div className="main-layout h-[calc(100vh-100px)] overflow-auto">
      <table className="table table-pin-rows table-zebra">
        <thead>
          <tr>
            <th>Serial</th>
            <th>Last update</th>
            <th>Reuse count</th>
            <th>Land landings</th>
            <th>Status</th>
            <th>Type</th>
            <th>Water landings</th>
          </tr>
        </thead>
        <tbody className="overflow-y-auto ">
          {data.map((capsule) => (
            <tr>
              <th>{capsule.serial}</th>
              <td>{capsule.last_update}</td>
              <td>{capsule.reuse_count}</td>
              <td>{capsule.land_landings}</td>
              <td>{capsule.status}</td>
              <td>{capsule.type}</td>
              <td>{capsule.water_landings}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Capsules;

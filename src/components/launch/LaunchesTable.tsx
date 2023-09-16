import { useLoaderData, useNavigate, useSearchParams } from 'react-router-dom';
import { Launch } from '../../api';
import { useMemo } from 'react';

type LaunchesFilter = {
  query: string;
  missionStatus: 'success' | 'fail' | 'status';
};

const init: LaunchesFilter = {
  query: '',
  missionStatus: 'status',
};

const LaunchesTable = () => {
  const data = useLoaderData() as Launch[];

  const navigate = useNavigate();

  const [params, setSearchParams] = useSearchParams(init);

  const filteredData = useMemo(() => {
    if (!data) return [];
    const response = data.filter(
      (launch) => launch.details?.toLocaleLowerCase().includes(params.get('query')?.toLocaleLowerCase() ?? ''),
    );
    if (!params.get('missionStatus')) return response;

    const filterData = response.map((item) => {
      if (params.get('missionStatus') === 'status') {
        return item;
      }
      if (item.success && params.get('missionStatus') === 'success') {
        return item;
      }
      if (!item.success && params.get('missionStatus') === 'fail') {
        return item;
      }
    });

    return filterData;
  }, [data, params]);

  console.log('Data length', filteredData.length);

  return (
    <div className="main-layout h-[calc(100vh-100px)] overflow-auto">
      <div className="flex justify-end gap-4 p-2">
        <div>
          <input
            value={params.get('query') ?? ''}
            onChange={(e) =>
              setSearchParams({ missionStatus: params.get('missionStatus') ?? '', query: e.target.value })
            }
            type="text"
            placeholder="Search by description"
            className="imput-sm input input-bordered w-full max-w-xs"
          />
          <label className="label">
            <span className="label-text-alt">Search by description </span>
          </label>
        </div>

        <div>
          <select
            className="select select-bordered w-full max-w-xs"
            value={params.get('missionStatus') ?? ''}
            onChange={(e) => setSearchParams({ query: params.get('query') ?? '', missionStatus: e.target.value })}
          >
            <option selected value="status">
              All
            </option>
            <option value="success">Success</option>
            <option value="fail">Fail</option>
          </select>
          <label className="label">
            <span className="label-text-alt">Mission status </span>
          </label>
        </div>
        <button onClick={() => setSearchParams(init)} className="btn btn-accent btn-outline">
          Reset filters
        </button>
      </div>
      <div className="divider" />
      <table className="table table-pin-rows table-zebra">
        <thead>
          <tr>
            <th>Name</th>
            <th>Flight number</th>
            <th>Date</th>
            <th>Mission status</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody className="overflow-y-auto ">
          {filteredData.map(
            (launch) =>
              launch && (
                <tr key={launch.id} className="hover cursor-pointer " onClick={() => navigate(`./${launch.id}`)}>
                  <td>{launch.name}</td>
                  <td>{launch.flight_number}</td>
                  <td>{launch.date_unix}</td>
                  <td>
                    <span className={`${launch.success ? 'badge badge-primary' : 'badge badge-secondary'}  w-[80px]`}>
                      {launch.success ? 'Success' : 'Fail'}
                    </span>
                  </td>
                  <td>{launch.details ?? 'No details avaiable'}</td>
                </tr>
              ),
          )}
        </tbody>
      </table>
    </div>
  );
};

export default LaunchesTable;

import { useLoaderData, useNavigate } from 'react-router-dom';
import { Launch } from '../../api';
import KeyValue from '../key-value';
import { TbFileDescription } from 'react-icons/tb';
import { FaRocket } from 'react-icons/fa';
import { SiWikidata } from 'react-icons/si';

import { IoArrowBackOutline } from 'react-icons/io5';

const LaunchComponent = () => {
  const data = useLoaderData() as Launch;

  const navigate = useNavigate();

  return (
    <>
      <div className="main-layout">
        <div className="spacing-2">
          <h1 className="text-[24px] font-bold">{data.name}</h1>

          <div className="divider mt-1" />
          <button className="btn btn-sm" onClick={() => navigate(-1)}>
            <IoArrowBackOutline />
            Back
          </button>
          <div className="flex  ">
            <div className="m-auto flex w-1/2 flex-col gap-4">
              <img src={data.links.flickr.small[0]} />
              <iframe
                className="h-[calc(100vh-500px)]"
                src={`https://www.youtube.com/embed/${data.links.youtube_id}`}
              ></iframe>
              <KeyValue label="Description" icon={<TbFileDescription />}>
                <span>{data.details}</span>
              </KeyValue>
              <KeyValue label="Flight number" icon={<FaRocket />}>
                <span>{data.flight_number}</span>
              </KeyValue>
              <KeyValue label="Wikipedia" icon={<SiWikidata />}>
                <a href={data.links.article} target="_blank">
                  {data.links.article}
                </a>
              </KeyValue>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LaunchComponent;

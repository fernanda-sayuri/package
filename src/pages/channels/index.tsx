import { Table } from "../../components/table";
import axios from 'axios';
import { IListChannel } from "../../interfaces";
import { useEffect, useState } from "react";
import { PlusIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const dataList: IListChannel[] = [
    {
        id: 1,
        title: 'Channel 1 Title',
        shortDescription: 'Short description of Channel 1',
        longDescription: 'Long description of Channel 1',
        channelName: 'Channel 1',
        channelNumber: 1,
        imageUrl: 'http://example.com/channel1.png',
        images: {},
        isAdult: false,
        isHd: true,
        isPayTv: true,
        isTv: true,
        group: 'Group 1',
        groupList: {},
        category: 'News',
        isSimulcast: true,
        metaTitle: 'Meta Title 1',
        metaDescription: 'Meta Description 1',
        mainChannel: 'Main Channel 1',
        mainPrograms: 'Main Programs 1',
    },
    {
        id: 2,
        title: 'Channel 2 Title',
        shortDescription: 'Short description of Channel 2',
        longDescription: 'Long description of Channel 2',
        channelName: 'Channel 2',
        channelNumber: 2,
        imageUrl: 'http://example.com/channel2.png',
        images: {},
        isAdult: false,
        isHd: true,
        isPayTv: true,
        isTv: true,
        group: 'Group 2',
        groupList: {},
        category: 'Sports',
        isSimulcast: true,
        metaTitle: 'Meta Title 2',
        metaDescription: 'Meta Description 2',
        mainChannel: 'Main Channel 2',
        mainPrograms: 'Main Programs 2',
    }];

const keysArray: string[] = ['id', 'title', 'channelNumber']

const Channels = () => {


  const [data, setData] = useState<IListChannel[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  
  useEffect(() => {
  
    const fetchData = async () => {
      try {
        const response = await axios.get<IListChannel[]>('https://core.skybr-dev.digital/api/bfbmscontentmanager/v1/channels?page=1&limit=10', {
          headers: {
            'accept': 'application/json'
          }
        });
        setData(response.data);
        setLoading(false);
        console.log(response.data);
    
      } catch (error) {
        setError('Error fetching data');
        setLoading(false);
        console.error('Error fetching data:', error);
      }
    };
    
    fetchData();
  }, []);

    if (loading) {
      return <div>Loading...</div>;
    }
    
    if (error) {
      return <div>{error}</div>;
    }
  
    return(
        <div className="page-container">
            <div className="page-header">
                <h1 className="page-title">Canais</h1>
                <button
                  className="btn btn-sm btn-primary normal-case font-normal text-zinc-50"
                >
                  <Link to="/channels/create">
                    <PlusIcon className="h-5 w-5" />
                    Create
                  </Link>
                </button>
            </div>
            <div className="overflow-x-auto bg-slate-50 border">
            <div>
            <div className="flex justify-between items-center m-4">
                <div className="flex justify-end items-center">
                    <form>
                    </form>
                </div>
            </div>
            <Table data={dataList} actions={true} keysArray={keysArray}/>
            </div>
      </div>
    </div>
    )
};

export default Channels;


import { useEffect, useState } from 'react';
import useAxiosApi from '../Hooks/useAxiosApi';
import DataTable from 'react-data-table-component';

const TableReact = () => {
    const axiosApi = useAxiosApi()
    const [allData, setAllData] = useState([])
    const url = '/blogs'
    useEffect(() => {
        axiosApi.get(url)
            .then(res => {
                console.log(res.data)
                setAllData(res.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [axiosApi])


    const columns = [
        {
            name: "No.",
            selector : row => row.no,
        },
        {
            name: "Title",
            selector: row => row.title,
        },
        {
            name:"Owner",
            selector: row => row.owner,
        },
        {
            name: "Image",
            cell: (row) => (
                <img src={row.image} width="50" className='rounded-full p-2' height="50" />
            )
        }
    ]
   
    console.log(allData)
const data = allData.slice(0,10).sort( (a,b)=> b.longDescription.length - a.longDescription.length ).map((tData, index) => {
    return {
        no: index +1,
        title: tData.title,
        owner: tData.userName,
        image: tData.userPhoto,

    }
})

console.log(data)
    return (
        <div className='pt-10 pb-10 bg-[#F1F2F2]'>
            <h3 className="text-3xl  md:max-w-6xl w-11/12 px-2 m-auto mb-10 border-l-rose-600 border-l-4 font-bold">Featured Blogs</h3>
            <div className='md:max-w-6xl w-11/12 bg-white  mx-auto border'>
            <DataTable columns={columns}
            data={data}>
            </DataTable>
        </div>
        </div>
    );
};

export default TableReact;
import {useEffect, useState} from 'react';
function PhotoList(props) {
    let data = props.data;
    /*const [data, setData] = useState(null);
    const [openDetails, setOpenDetails] = useState(false);


    useEffect(() => {
        setData(null);

        fetch(`https://jsonplaceholder.typicode.com/photos`)
        .then(resp => resp)
        .then(resp => resp.json())
        .then(response => {            
            setData(response.slice(0, 50));
        })
        .catch(({message}) => {
            console.log(message);
        })

    },[]);
    console.log(data);*/
  return (
    <div className="photo-list">
        <table>
            <thead>
                <th>
                    Thumbnail
                </th>
                <th>
                    ID
                </th>
                <th>
                    Title
                </th>
                <th></th>
            </thead>
            <tbody>
            {data !== null && data.length > 0 && data.map( (photo, index) => (        
                <tr key={index}>
                    <td><img src={photo.thumbnailUrl} alt="" /></td>
                    <td>{photo.id}</td>
                    <td>{photo.title}</td> 
                    <td><button onClick={() => props.onOpen(photo)}>Open</button></td> 
                </tr>
            ))}
            </tbody>
        </table>
    </div>
  );
}

export default PhotoList;

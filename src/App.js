import './App.css';
import { PhotoList, PhotoDetails } from './components';
import {useEffect, useState} from 'react';

function App() {
  
  const [data, setData] = useState(null);
  const [details, setDetails] = useState(false);

  //setOpenDetails(false);

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

  return (
    <div className="container">
      <PhotoList data={data} onOpen={(photo) => setDetails(photo)}/>
      {details &&
        <PhotoDetails {...details} onClose={() => setDetails(false)}/>
      }
    </div> 
  );
}

export default App;

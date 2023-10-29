import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Textinput from '@/components/ui/Textinput';
import { useParams } from 'react-router-dom';

import { useLocation } from 'react-router-dom';


function Diagnostica() {

  const [Data, setData] = useState([]);
  const [showButton, setShowButton] = useState(true);
  const location = useLocation();
  const email = new URLSearchParams(location.search).get('email');
  
  const openNewTab = () => {
    window.open(`step1?email=${email}`);
  };

  useEffect(() => {
    if (email) {
      axios
        .get(`http://localhost:3001/Data?email=${email}`)
        .then((response) => {
          console.log(response);
          setData(response.data);
          if (response.data.length > 0) {
            // Data is available, hide the button
            setShowButton(false);

          }
        })
        .catch((error) => {
          console.error("Error fetching answers:", error);
        });
    }
  }, [email]);


  return (
    <div>
         
         
     
      {showButton && (
        <div>

          <button type="button" className="btn btn-success" onClick={openNewTab}>
            DIAGNOSTICA
          </button>
          <br />
          <br />
          <p>Redirect to New Tab</p>
        </div>
      )}

      {Data.length > 0 && (
        <div className='flex  gap-7'>
          
          <p><b>Data from the API:</b></p>
          
          <ul>
            {Data.map((item, index) => (
              <li key={index}>{item.data}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

  


export default Diagnostica;

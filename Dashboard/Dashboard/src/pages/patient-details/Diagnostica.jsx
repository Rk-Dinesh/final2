import React from 'react';

function Diagnostica() {
  const openNewTab = () => {
    window.open('step1');
  };

  return (
    <div>
     <div>
     <button type="button" className="btn btn-success" onClick={openNewTab}>
        DIAGNOSTICA
      </button>
     </div>
      <br />
     <div>
     <p>Click button to Navigate Diagnostica form</p>
     </div>
    </div>
  );
}

export default Diagnostica;

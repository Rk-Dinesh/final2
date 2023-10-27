import React from 'react';

function Diagnostica() {
  const openNewTab = () => {
    window.open('test');
  };

  return (
    <div>
      Diagnostica
      <button type="button" className="btn btn-primary" onClick={openNewTab}>
        Open New Tab
      </button>
    </div>
  );
}

export default Diagnostica;

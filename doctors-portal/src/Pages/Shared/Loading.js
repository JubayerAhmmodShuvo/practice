import React from 'react';

const Loading = () => {
  return (
    <div className="h-screen flex justify-center items-center" >
       <div class="w-40 h-40 border-t-4 border-b-4 border-green-900 rounded-full animate-spin"></div>

      
      {/* <button className="btn loading">Loading</button> */}
    </div>
  );
};

export default Loading;
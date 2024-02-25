import React from 'react';
import ScaleLoader from "react-spinners/ScaleLoader";

const Loading = () => {
  return (
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '80vh'
    }}>
        <ScaleLoader color="#000000" />
    </div>
  )
}

export default Loading;
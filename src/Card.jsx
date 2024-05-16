import React from 'react';

function Card(props) {
  const cleanProp = (prop) => {
    // Removing double quotes from the prop value
    return prop.replace(/"/g, '');
  };

  return (
    <div className='flex justify-center items-center h-screen'>
        <div className='flex items-center border-2 border-black w-96 h-60'>
            <div className='m-8'><img src={cleanProp(props.src)} alt='no img'/></div>
            <div>
                <div className='m-3'>
                    {cleanProp(props.firstname)}
                    {' '}
                    {cleanProp(props.lastname)}
                </div>
                <div className='m-3'>
                    {cleanProp(props.gender)}
                </div>
                <div className='m-3'>
                    {cleanProp(props.phone)}
                </div>  
            </div>
        </div>
    </div>
  );
}

export default Card;

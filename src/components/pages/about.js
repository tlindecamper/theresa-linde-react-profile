import React from 'react';
import profilePicture from '../../../static/assets/images/bio/profilepic.jpg';

export default function() {
    return (
        <div className='content-page-wrapper'>
            <div className='left-column'
            style={{
                background:"url(" + profilePicture + " ) no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }} 
            />
                 
            
            <div className='right-column'>
                Here is where i put in my info.....
            </div>
          
        
            
        </div>
    
  );  
}

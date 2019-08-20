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
            After 25 years in the Retail/Retail Management Industry, I decided to change 
            careers to a more marketable and challenging field.  I am an avid learner with 
            the ability to learn languages and methodologies at an impressive pace.
             This, combined with my work ethic and love for coding, make me an excellent developer.

            </div>
          
        
            
        </div>
    
  );  
}

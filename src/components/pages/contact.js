import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import authPic from '../../../static/assets/images/auth/login.jpg';


export default function() {
    return (
        <div className='content-page-wrapper'>
            <div className='left-column'
            style={{
                background:"url(" + authPic + " ) no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }} 
            />
                 
            
            <div className='right-column'>
                <div className='contact-bullet-points'>
                    <div className='bullet-point-group'>
                        <div className='icon'>
                        <FontAwesomeIcon icon='mobile-alt' />
                        </div>

                        <div className='text'>
                        555-555-555
                        </div>
                    </div>

                    <div className='bullet-point-group'>
                        <div className='icon'>
                        <FontAwesomeIcon icon='envelope' />
                        </div>

                        <div className='text'>
                        therelan2001@yahoo.com
                        </div>
                    </div>
                    <div className='bullet-point-group'>
                        <div className='icon'>
                        <FontAwesomeIcon icon='map-marked-alt' />
                        </div>

                        <div className='text'>
                        Saratoga Springs, UT
                        </div>
                    </div>

                    </div>
                    
                    
               
            </div>
          
        
            
        </div>
    
  );  
}    
import React from 'react';
import './App.css'
function prop()
{
    
}
function fbcomments(prop)
{
    return (
        <div id="container">
            <img src={prop.src} alt={prop.imagename}/>
            <div>
                <h2>{prop.profileName}</h2>
                <p>{prop.comment}</p>
                    <div id='link'>
                        <a href="$">Like </a>
                        <a href="$">Replay </a>
                    </div>
            </div>
        </div>
        
    );
}
export default fbcomments;

import React from 'react';

const styleIframe = {
    width: '100%',
    height: '200', 
    frameborder: '0', 
    border: '0'
};

export default function Mapa(){
    return (
        <div>
            <iframe src="" style={styleIframe} allowfullscreen></iframe>
        </div>
    )

}
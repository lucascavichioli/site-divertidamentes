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
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14210.370677802888!2d-48.9345431!3d-27.0746025!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x499a30239b3b19c2!2sH%20A%20R%20T%C3%AAxtil%20Malhas%20e%20Confec%C3%A7%C3%B5es!5e0!3m2!1spt-BR!2sbr!4v1581268340017!5m2!1spt-BR!2sbr" style={styleIframe} allowfullscreen></iframe>
        </div>
    )

}
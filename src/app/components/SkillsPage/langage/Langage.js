import React from 'react';
import '../../../../../public/css/langage.css';

// child skills component
const langage = (props) => {
    

    return (
        <div id={props.descriptionPage? 'langageDescriptionPage' :'langage'}>
            <figure>
                <img src={props.img} />
            </figure>
            <h6>{props.titleLangage}</h6>
        </div>
    );
};

export default langage;
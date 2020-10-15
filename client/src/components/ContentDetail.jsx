import React from 'react';

function ContentDetail(props){
    return(
        <div>
            <div>{props.id} / <img src={props.image} className="img" alt={props.name} />{props.name} <small>({props.date})</small></div>
            <h2>{props.title}</h2>
            <textarea readOnly>{props.content}</textarea>
        </div>
        
    )
}

export default ContentDetail;
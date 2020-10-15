import React from 'react';

function ContentList(props){
    // render(){
        // console.log(props)
        return(
            <tr>
                <td>{props.id}</td>
                <td><img src={props.image} className="img" alt={props.name} />{props.name} <small>({props.date})</small></td>
                <td><a href="#">{props.title}</a></td>
                <td>{props.content}</td>
            </tr>
        )
    // }
}

export default ContentList;
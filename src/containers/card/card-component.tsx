import React, {FunctionComponent} from 'react'
import './card-style.css'

export const Card: FunctionComponent<{user: any}> =  (props) => {

    return  <div className="card-container">
        <img src={`https://robohash.org/${props.user.id}?set=set2&size=200x200`} /> 
        <h2>{props.user.name} </h2>
        <p>{props.user.email}</p>
     </div>
}
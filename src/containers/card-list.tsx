import React, { FunctionComponent } from 'react';
import './card-list.css';
import { Card } from './card/card-component';

type User = {
    users: [];
}

export const CardList: FunctionComponent<User> = (props) => {
    return <div className='card-list'>
        {props.users.map((p: { id: string | number | null | undefined; name: React.ReactNode; }) => {
          return <Card key={p.id} user={p}/>
        })}
    </div>; 
         
         
}
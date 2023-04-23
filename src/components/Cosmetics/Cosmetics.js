import React, { useEffect, useState } from 'react';
import { add } from '../../utilities/calculate';
import Cosmetic from '../Cosmetic/Cosmetic';

const Cosmetics = (props) => {
    const [cosmetics, setCosmetics] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data =>setCosmetics(data))
    },[])
    return (
        <div>
            <h1>Welcome to my store</h1>
            {
                cosmetics.map(cosmetic => <Cosmetic key={cosmetic.id} cosmetic={cosmetic}></Cosmetic>)
            }
        </div>
    );
};

export default Cosmetics;
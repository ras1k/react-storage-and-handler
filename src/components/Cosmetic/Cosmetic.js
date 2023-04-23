import React from 'react';

const Cosmetic = (props) => {
    const {name, price, id} = props.cosmetic;
    return (
        <div>
            <h2>Buy This : {name}</h2>
            <p>Only For : ${price}</p>
            <p><small>ID : {id}</small></p>
        </div>
    );
};

export default Cosmetic;
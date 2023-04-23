import React from 'react';
import { add, multiply } from '../../utilities/calculate';

const Shoes = () => {
    const first = 2;
    const second = 4;
    const result = multiply(first, second);
    const sum = add(first, second)
    return (
        <div>
            <p>Result : {result} and Sum : {sum}</p>
        </div>
    );
};

export default Shoes;
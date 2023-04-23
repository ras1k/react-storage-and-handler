import React from 'react';
import { add, multiply, subtract } from '../../utilities/calculate';

const Shoes = () => {
    const first = 20;
    const second = 4;
    const result = multiply(first, second);
    const sum = add(first, second);
    const minus = subtract(first, second);
    return (
        <div>
            <p>Result : {result} and Sum : {sum} and Minus : {minus}</p>
        </div>
    );
};

export default Shoes;
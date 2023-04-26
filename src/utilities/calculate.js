const add = (first, second) =>{
    return first + second;
}

const multiply = (first, second) =>{
    return first * second;
}

const subtract = (first, second) =>{
    return first - second;
}

// const numbers = [2, 12, 23, 44, 55, 67];
// const sumReducer = (previous, current) => previous + current;
// const total = numbers.reduce(sumReducer ,0);

// const items = [
//     {id:1, name: 'lol', price : 1999},
//     {id:1, name: 'lol', price : 1999},
//     {id:1, name: 'lol', price : 1999},
//     {id:1, name: 'lol', price : 1999},
//     {id:1, name: 'lol', price : 1999}
// ]
// const itemReducer = (previous, current) => previous + current.price;
// const itemTotal = items.reduce(itemReducer, 0);

const getTotalPrice = products =>{
    const reducer = (previous, current) => previous + current.price;
    const total = products.reduce(reducer, 0);
    return total;
}

// export default add;
export {add, multiply, subtract, getTotalPrice}
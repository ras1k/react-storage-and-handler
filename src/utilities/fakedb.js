const addToDb = (id) =>{
    const quantity = localStorage.getItem(id);
    if(quantity){
        console.log('lol');
        const newQuantity = parseInt(quantity) + 1;
        localStorage.setItem(id, newQuantity)
    } else {
        console.log('f')
        localStorage.setItem(id, 1);
    }

}
export{addToDb}
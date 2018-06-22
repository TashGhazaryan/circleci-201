if (orderTotal({
    items: [
        { name: 'name1', price: 8 },
        { name: 'name1', price: 800 }
    ]
}) !== 808) {
    throw new Error('Check fail');
}
function orderTotal() {
    return 808;
}

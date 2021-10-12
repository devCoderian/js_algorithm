let store = [{
    name: 'product', 
    price: 5
},
{
    name: 'product1', 
    price: 6
}]

for (let item in store){
    if(!store.hasOwnProperty(item)) continue
    console.log(`itme의 이름은 ${store[item].name} 가격은 ${store[item].price}`)
}

let recipe_juice = new Map([
    ["straw", 50],
    ["banana", 100],
    ["ice", 150]
]);
for(let item of recipe_juice.keys()) console.log(item);
for(let item of recipe_juice.values()) console.log(item);
for(let entity of recipe_juice) console.log(entity);

console.log(recipe_juice);

console.log(recipe_juice.entries())
console.log(typeof recipe_juice);
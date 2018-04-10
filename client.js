let cost = 10;

class Pizza {
    constructor(ingredients = ['cheese']){
        this.ingredients = ingredients
    }
    cost(){ 
        if (this.ingredients.length < 2){
            return cost;
        } else {
            let toppings = 0.99 * (this.ingredients.length - 1)
            return ('Cost: $', cost + toppings)
        }
    }
}
let genericPizza = new Pizza();
let pizza1 = new Pizza (['cheese', 'pepperoni', 'sausage']);
console.log('Generic Pizza = ', genericPizza);
console.log('Pizza1 = ', pizza1);

console.log('Cost of genericPizza = ', genericPizza.cost());
console.log('Cost of pizza1 =', pizza1.cost());


class Order extends Pizza {
    constructor(pizzas){
        super();
        this.pizzas = pizzas;
    }
    orderCost(){
        let order = 0;
        for (let pizza of this.pizzas){
            console.log('pizzas in this.pizzas: ', pizza);
            
            order += pizza.cost()
        }
        return ('Order total: $', order)
    }
}

let genericOrder = new Order([genericPizza])
let costOfGo = genericOrder.orderCost();
let order1 = new Order([genericOrder, pizza1]);
let costOfOrder1 = order1.orderCost();
console.log('Generic Order: ', genericOrder);
console.log('Cost of generic order: ', costOfGo);
console.log('Order1: ', order1);
console.log('Cost of order1: ', costOfOrder1);



//  Asynchronous JavaScript:
let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
 };



/*
//  Asynchronous Way
let order = (fruit_name, call_production) => {
    setTimeout(() => {
        console.log(`${stocks.Fruits[fruit_name]} was selected`);
        call_production();
    }, 2000)
}
let production = () =>{
  setTimeout(()=>{
    console.log("production has started")
    setTimeout(()=>{
      console.log("The fruit has been chopped")
      setTimeout(()=>{
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} Added`)
        setTimeout(()=>{
          console.log("start the machine")
          setTimeout(()=>{
            console.log(`Ice cream placed on ${stocks.holder[1]}`)
            setTimeout(()=>{
              console.log(`${stocks.toppings[0]} as toppings`)
              setTimeout(()=>{
                console.log("serve Ice cream")
              },2000)
            },3000)
          },2000)
        },1000)
      },1000)
    },2000)
  },0000)
};
order(0, production);
*/











/*
//  Promise Way
let is_shop_open = true;
let order = ( time, work ) => {
    return new Promise((resolve, reject)=>{
      if( is_shop_open ){
        setTimeout(()=>{
        resolve(work())
        }, time) 
      } 
      else{
        reject( console.log("Our shop is closed") )
      }
    })
}
order(2000, () => {
    console.log(`${stocks.Fruits[0]} was selected`)
})
.then(() => {
    return order(0000, () => console.log('production has started'))
})
.then(()=>{
    return order(2000, ()=>console.log("Fruit has been chopped"))
})
.then(()=>{
    return order(1000, ()=>console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`))
})
.then(()=>{
    return order(1000, ()=>console.log("start the machine"))
})
.then(()=>{
    return order(2000, ()=>console.log(`ice cream placed on ${stocks.holder[1]}`))
})
.then(()=>{
    return order(3000, ()=>console.log(`${stocks.toppings[0]} as toppings`))
})
.then(()=>{
    return order(2000, ()=>console.log("Serve Ice Cream"))
})
.catch(() => {
    console.log("Customer Left");
})
.finally(() => {
    console.log("day ended, shop is closed");
});

*/








/*
//  Async Await
function toppings_choice (){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve( console.log("which topping would you love?") ) 
      },3000)
    })
}
//  async Function
async function kitchen(){
    console.log("A")
    console.log("B")
    console.log("C")
    
    await toppings_choice()
    
    console.log("D")
    console.log("E")
}
// Trigger the async function
kitchen();
console.log("doing the dishes")
console.log("cleaning the tables")
console.log("taking orders")
*/












//  let's make ice-cream in async await way:
let is_shop_open = true;
function time(ms) {
   return new Promise( (resolve, reject) => {
      if(is_shop_open){
        setTimeout(resolve,ms);
      }
      else{
        reject(console.log("Shop is closed"))
      }
    });
}

async function kitchen1(){
    try{
        await time(2000)
        console.log(`${stocks.Fruits[0]} was selected`)

        await time(0000)
        console.log("production has started")

        await time(2000)
        console.log("fruit has been chopped")

        await time(1000)
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`)

        await time(1000)
        console.log("start the machine")

        await time(2000)
        console.log(`ice cream placed on ${stocks.holder[1]}`)

        await time(3000)
        console.log(`${stocks.toppings[0]} as toppings`)

        await time(2000)
        console.log("Serve Ice Cream")
    }
    catch(error){
	 console.log("customer left")
    }
}

kitchen1();
//  Higher-order functions are functions that work on other functions, meaning that they take one or more functions as an argument and can also return a function.
//  Higher order functions are functions that take at least one first class function as a parameter, or return at least one first class function.


const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//  forEach()
    // for (let i = 0; i < companies.length; i++) {
    //     console.log(companies[i]);
    // }

    // companies.forEach(function(company) {
    //     console.log(company);
    // })



//  filter()
    // let canDrink = [];
    // for (let i = 0; i < ages.length; i++) {
    //     if (ages[i] >=18) {
    //         canDrink.push(ages[i]);
    //     }
    // }
    // console.log(canDrink);
    // let drink = ages.filter(function(age){
    //     return age >= 18
    // });
    // console.log(drink);

    // const retailCompany = companies.filter(company => company.category === 'Retail');
    // console.log(retailCompany);

    // const Ninety = companies.filter(company => (company.start > 1980 && company.start < 1990));
    // console.log(Ninety);






//  map
    // const companyName = companies.map(function (company) {
    //     return company.name;
    // })
    // console.log(companyName);

    // const testMap = companies.map(company => `${company.name} : [${company.start} - ${company.end}]`);
    // console.log(testMap);

    // const sqrt = ages.map(age => Math.round(Math.sqrt(age)));
    // console.log(sqrt);



//  sort
    // const end = companies.sort(function (c1, c2) {
    //     if(c1 > c2) {
    //         return -1;
    //     }else{
    //         return 1;
    //     }
    // })
    // console.log(end)
    // const start = companies.sort((a, b) => a.start > b.start ? -1 : 1);
    // console.log(start);



//  reduce
    // let total = 0;
    // for (let i = 0; i < ages.length; i++) {
    //     total += ages[i];
    // }
    // console.log(total);

    // const totalMultiply = ages.reduce((a, b) => a + b, 0);
    // console.log(totalMultiply);

    // const totalYears = companies.reduce(function(a, b) {
    //     return a + (b.end - b.start);
    // }, 0)
    // console.log(totalYears)



//  combined all method
    const combined = ages.map(age => age * 2)
    .filter((age) => age >= 40)
    .sort((a, b) => a - b)
    .reduce((a, b) => a + b, 0);
    console.log(combined);
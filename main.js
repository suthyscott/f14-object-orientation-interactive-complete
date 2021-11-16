let person = {
    firstName: 'Scott', 
    lastName: 'Sutherland',
    age: 23
}

// console.log(person.firstName)
// console.log(person['firstName'])


let meal = {
    appetizer: 'chips & salsa',
    entree: 'al pastor burrito',
    dessert: 'churros',
    drink: 'dr. pepper'
  }
  
// const {dessert, appetizer} = meal
// const dessert = meal.dessert

const {appetizer: myAppetizer, entree: myEntree, dessert: myDessert, drink: myDrink} = meal

// console.log(myAppetizer, myEntree, myDessert, myDrink)
// console.log(meal)

for(let key in person){
    // console.log(typeof key) // property/key
    // console.log(person[key]) // value at that key
}

person.job = 'Foundations Instructor'
person.age = 24

person['car'] = 'BMW 128i'

delete person.car
// console.log(person)


class Dog {
    constructor(dogName, dogBreed, dogAge, toysArr = []){
        console.log(dogName, dogBreed, dogAge, "came from the child class")
        this.name = dogName
        this.breed = dogBreed
        this.age = dogAge
        this.favoriteToys = toysArr
    }

    greeting(){
        console.log(`Hi, my name is ${this.name} and I am an ${this.age} year old ${this.breed}`)
    }

    addToy(toy){
        this.favoriteToys.push(toy)
    }
}

class Puppy extends Dog {
    constructor(dogName, dogBreed, dogAge, toysArr, trainingLevel = 0){
        console.log(dogName, dogBreed, dogAge, 'are parameters in the puppy class')
        super(dogName, dogBreed, dogAge, toysArr)

        this.trainingLevel = trainingLevel
        this.isShedding = false
    }

    levelUp(num){
        this.trainingLevel += num
    }

    toggleShedding(){
        this.isShedding = !this.isShedding
    }

    addToy(toy){
        super.addToy(toy)
        console.log(this.favoriteToys)
    }
}

let lassie = new Dog('Lassie', 'Collie', 18)
console.log(lassie.favoriteToys)

// let beethoven = new Dog('Beethoven', 'St. Bernard', 12)


let chief = new Puppy('Chief', 'Husky', 1, ['rubberduck'])
// console.log(chief)
// chief.addToy('bone')
// chief.addToy('rubber duck')
// // console.log(chief)
// console.log(Object.getOwnPropertyNames(chief))

// lassie.addToy('bone')
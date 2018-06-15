const createCounter = () => {
    let count = 0

    return {
        increment() {
            count++
        },
        decrement() {
            count--
        },
        get() {
            return count
        }
    }
}

const counter = createCounter()
counter.increment()
counter.increment()
counter.decrement()
console.log(counter.get())

//Ader 

const createAdder = (a) => {
    return (b) => {
        return a+b
    }
}

const add10 = createAdder(10)
console.log(add10(5))

//Tipper

const createTipper = (tip) => {
    return (bill) => {
        return tip * bill
    }
}

const tip10 = createTipper(.1)
console.log(tip10(1000))

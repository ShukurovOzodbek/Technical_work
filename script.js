let obj = {
    name: 'Ozodbek',
    age: 156,
    ismaried: true
}
let obj2 = {
    sname: 'Shukurov',
    sons: 2,
    sonIsMarried: true
}

let newObj = Object.assign(obj, obj2)
console.log(newObj);
// Key Value
let keys = Object.keys(newObj)
let values = Object.values(newObj)
console.log(keys, values);
// soedeneniye
let newKey = Object.assign(keys, values)
let newB = Object.entries(newKey)
console.log(newB);
// filter
let number = []
let string =[]
let bool = []

let filt = newKey.filter(item => {
    if (typeof item === 'number') {
        number.push(item)
    }else if (typeof item === 'string') {
        string.push(item)
    }else if ( typeof item === 'boolean') {
        bool.push(item)
    }
})
console.log(number, string, bool);

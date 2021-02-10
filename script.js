let people = [{
    name: "D$",
    role: "Instruct"
},
{
    name: "Harrison",
    role: "Instruct"
},
{
    name: "Brittany",
    role: "Admin"
},
{
    name: "Mark",
    role: "Instruct"
},
{
    name: "Jimmy",
    role: "Tester"
}]

function greet(data){
    for(let i =0; i <data.length; i++){
        let person = data[i]
        if(person.role == "Instruct"){
            console.log(`Welcome ${person.name} ${person.role}`)
        }
        else if(person.role == "Admin"){
            console.log(`Welcome ${person.name} ${person.role}, Have a great day!`)
        }
        else{
            console.log('Not a Codeworks employee.')
        }
    }
}

greet(people)
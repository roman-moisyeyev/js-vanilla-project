export type ManType = {
    name: string,
    age: number

}

const people: Array<ManType> = [
    {name: "Serhiy Petrenko", age: 22},
    {name: "Oleksandr Vakulenko", age: 40},
    {name: "Stepan Ignatenko", age: 53}
]

const transformator = (man: ManType) => ({
        stack: ['css', 'html', 'javascript', 'tdd', 'react'],
        firstName: man.name.split(' ')[0],
        lastName: man.name.split(' ')[1]
    })



const devs = [
    {
        stack: ['css', 'html', 'javascript', 'tdd', 'react'],
        firstName: "Serhiy", lastName: "Petrenko"
    },
    {
        stack: ['css', 'html', 'javascript', 'tdd', 'react'],
        firstName: "Oleksandr", lastName: "Vakulenko"
    },
    {
        stack: ['css', 'html', 'javascript', 'tdd', 'react'],
        firstName: "Stepan", lastName: "Ignatenko"
    },
]

const devs3 = people.map(transformator)
const devs4 = people.map((man: ManType) => ({
    stack: ['css', 'html', 'javascript', 'tdd', 'react'],
    firstName: man.name.split(' ')[0],
    lastName: man.name.split(' ')[1]
}))

const messages = people.map(man=>`hello ${man.name.split (' ')[0]}.Welcome to IT-INCUBATOR`)
export const createGreetingMessage = (people:Array<ManType>)=>{
    return people.map(man=>`hello ${man.name.split (' ')[0]}.Welcome to IT-INCUBATOR`)
}
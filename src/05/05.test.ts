import {createGreetingMessage, ManType} from "./05";

let people: Array<ManType> = []

beforeEach(()=>{
    people= [
        {name: "Serhiy Petrenko", age: 22},
        {name: "Oleksandr Vakulenko", age: 40},
        {name: "Stepan Ignatenko", age: 53}
    ]

})

test('should get array of greeting messages',()=>{
    const messages = createGreetingMessage(people)

    expect(messages.length).toBe(3)
    expect(messages[0]).toBe("hello Serhiy.Welcome to IT-INCUBATOR")
    expect(messages[1]).toBe("hello Oleksandr.Welcome to IT-INCUBATOR")
    expect(messages[2]).toBe("hello Stepan.Welcome to IT-INCUBATOR")

})
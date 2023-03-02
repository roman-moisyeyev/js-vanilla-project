import {UserType} from "./09_01";

const increaseAge = (u: UserType) => {
    u.age++
}


test('object test', () => {
    let user = {
        name: "Roman",
        age: 43,
    }

    const increaseAge = (user: UserType) => {
        user.age++
    }

    increaseAge(user)
    expect(user.age).toBe(44)

    const superman = user
    superman.age = 1000

    expect(user.age).toBe(1000)
})

test('array reference test', () => {
    let users = [
        {name: "Roman", age: 43},
        {name: "Oleg", age: 46},
    ]

    var admins = users
    admins.push({name: 'Nikita', age: 10})


    expect(users[2]).toEqual({name: 'Nikita', age: 10})

})

test('array value type test', () => {
    let usersCount = 100


    let adminsCount = usersCount

    adminsCount = adminsCount + 1


    expect(usersCount).toBe(100)
    expect(adminsCount).toBe(101)

})

test('object test with object', () => {
    let user = {
        name: "Roman",
        age: 43,
        address: {
            title: "Kharkiv"
        }
    }

    let addr = user.address
    let user2: UserType = {
        name: 'Andrey',
        age: 32,
        address: user.address
    }

    user2.address.title = "Kyiv"

    expect(user.address.title).toBe("Kyiv")
})

test('array type reference test', () => {

    const address = {
        title: 'Lozova'
    }

    let user: UserType = {
        name: "Stepan",
        age: 34,
        address: address
    }
    let user2: UserType = {
        name: "Nikolai",
        age: 24,
        address: address
    }

  const users=[user,user2,{name:"Leonid",age:23,address:address}]

    const admins=[user,user2]

    admins[0].name='Dmitry'


    expect(users[0].name).toBe('Dmitry')
    expect(user.name).toBe('Dmitry')
    expect(admins[0].name).toBe('Dmitry')

})

test('sort array test', () => {
   const letters = ['r','e','s','p','a','c']
    letters.sort()

    expect(letters).toEqual(['a','c','e','p','r','s'])
})



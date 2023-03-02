export const usersArray2 = ["Dima","Roman","Sergey","Alena","Svetlana"]

export const userObj ={
    '0':'BookaPooka',
    '1':'Krakozubla',
    '2':'x96khairport',
    '3':'sorbusflower',
    '4':'Patrick Hornqvist'
}

export type UsersType= {
    [key:string]:{id:number,name:string}
}

export const users:UsersType ={
    '40487':{id:40487,name:'BookaPooka'},
    '97886':{id:97886,name:'Krakozubla'},
    '35348':{id:35348,name:'x96khairport'},
    '976':{id:976,name:'sorbusflower'},
    '2617':{id:2617,name:'Patrick Hornqvist'}
}
//users[1] доставание из обьекта

//var user ={id:75873, name:"Rafik"}
//users[user.id] = user                      добавление пользователя в обьект
delete users[user.id]
users[user.id].name="NewName"


export const usersArray = [
    {id:40487,name:'BookaPooka'},
    {id:97886,name:'Krakozubla'},
    {id:35348,name:'x96khairport'},
    {id:976,name:'sorbusflower'},
    {id:2617,name:'Patrick Hornqvist'}
]
//usersArray.findIndex()
//usersArray.find(u=>u.id===2617)       доставание из массива



usersArray.push(user)

//var userCopy = [...usersArray,user]         добавление пользователя в массив
var usersArray= usersArray.filter(u=>u.id!==user.id)


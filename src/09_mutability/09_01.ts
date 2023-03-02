
export type UserType={
    name:string,
    age:number,
    address:{ title:string }
}

let user ={
    name:"Roman",
     age:43
 }

 const increaseAge = (user:UserType)=>{
    user.age++
 }
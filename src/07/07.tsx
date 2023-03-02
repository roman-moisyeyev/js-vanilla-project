import React from "react";

export type ManType = {
    name: string
    age: number
    lessons: Array<{ title: string;name?:string;value?:number }>
    address: {
        street: {
            title: string
        }
    }

}
type PropsType ={
    title:string
    man:ManType
    food:Array<string>
    car:{model:string}

}
const useRomstonState =(m:string)=>{
    return [m,function(){}]

}

export const ManComponent:React.FC<PropsType>=({title,man,...props})=>{

const [message,setMessage]=useRomstonState('hello')

    return(
        <div>
            <h1>{title}</h1>
            <hr/>
            <div>
                {man.name}
            </div><div>
                {props.car.model}
            </div>
        </div>
    )
}
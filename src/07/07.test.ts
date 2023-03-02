import {ManType} from "./07";


let props: ManType
beforeEach(() => {
        props = {
            name: 'Roman',
            age: 32,
            lessons: [{title: '1'}, {title: '2',value:500},{title: '3',name:'react'}],
            address: {
                street: {
                    title: 'Hryhorenko ave'
                }
            }
        }
    })


test('', () => {


    //const age = props.age
    //const lessons = props.lessons

    const {age, name, lessons} = props

    expect(age).toBe(32)
    expect(lessons.length).toBe(3)
    expect(name).toBe('Roman')
})

test ('',()=>{
    const l1= props.lessons[0]
    const l2= props.lessons[1]

    //const[ls1,ls2]=props.lessons
   // const[,ls2]=props.lessons
    //const[,,ls3]=props.lessons
    const [,ls2,...restLessons]=props.lessons


    //expect(l1.title).toBe('1')
    //expect(l2.title).toBe('2')
   // expect(ls1.title).toBe('1')
    //expect(ls2.title).toBe('2')
    expect(restLessons.length).toBe(1)
    expect(restLessons[0].title).toBe('3')
    expect(restLessons[0]).toStrictEqual({title: '3',name:'react'})
    expect(ls2.title).toBe(2)
    expect(ls2).toStrictEqual({title: '2',value:500})

})


var user = {
    name:"Roman",
    hobbies:"react",
    address:{
        country:"Ukraine",
        city:{
            title:"Kharkiv",
            street:{
                streetTitle:"Grygorenko ave",
            }
        }
    }
}
const ages = [18, 25, 32, 1, 78, 85, 89, 87,
    63, 45, 32, 30, 27, 16, 45, 98, 90, 100, 67, 58]

const predicate = (age: number) => {
    return age > 80

}
const oldAges = [85, 89, 87, 98, 90, 100]; //>80


const courses = [
    {title: "html", price: 100},
    {title: "css", price: 150},
    {title: "react", price: 200}
]

type CourseType ={
    title: string,
    price: number

}
//<160
const cheapPredicate = (course:CourseType)=>{
    return course.price <160
}

const cheapCourses=[]

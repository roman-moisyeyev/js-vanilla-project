test("should take old men older then 80 years old", () => {
    const ages = [18, 25, 32, 1, 78, 85, 89, 87, 63, 45, 32, 30, 27, 16, 45, 98, 90, 100, 67, 58];



        const oldAges = ages.filter(age=>  age > 80);


        expect(oldAges.length).toBe(6);
        expect(oldAges[1]).toBe(89);

    }
)
test("should take courses cheaper 160", () => {
    const courses = [
        {title: "html", price: 100},
        {title: "css", price: 150},
        {title: "react", price: 200}
    ]



        const cheapCourses = courses.filter(course=>course.price <160);


        expect(cheapCourses.length).toBe(2);
        expect(cheapCourses[0].title).toBe("html");
        expect(cheapCourses[1].title).toBe("css");

    }
)


test('get only completed task',()=>{
    const task = [
        {id:1,title:"Bread",isDone:false},
        {id:2,title:"Milk",isDone:true},
        {id:3,title:"Sugar",isDone:true},
        {id:4,title:"Salt",isDone:false}
    ]

    const completedTask = task.filter(t=>t.isDone)
    const notCompletedTask = task.filter(t=>!t.isDone)


    expect(completedTask.length).toBe(2)
    expect(completedTask[0].id).toBe(2)
    expect(completedTask[1].title).toBe("Sugar")
    expect(notCompletedTask[1].title).toBe("Salt")
})



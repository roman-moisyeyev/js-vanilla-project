type UsersType= {
    [key:string]:{id:number,name:string}
}

let users:UsersType

beforeEach(()=>{
    users={
        '40487':{id:40487,name:'BookaPooka'},
        '97886':{id:97886,name:'Krakozubla'},
        '35348':{id:35348,name:'x96khairport'},
        '976':{id:976,name:'sorbusflower'},
        '2617':{id:2617,name:'Patrick Hornqvist'}
    }

})




test('should update corresponding user from obj',()=> {
    users['40487'].name='Jasmin'

    expect(users['40487'].name).toBe('Jasmin')
    expect(users['40487']).toEqual({id:40487,name:'Jasmin'})
})

test('should delete corresponding user from obj',()=> {
    delete users['40487']

    expect(users['40487']).toBe(undefined)
})
const dummyValues=[
    {
        "description":"Macbook pro",
        "amount":142000,
        "date":"15-01-2021"
    }
];



export const expenseReducer=(state=dummyValues,action)=>{
    switch(action.type){


        default:
            return state;
    }
}
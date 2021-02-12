const dummyValues=[
    {   "id":1,
        "description":"Macbook pro",
        "amount":142000,
        "date":"15/01/2021"
    },
    {   "id":2,
        "description":"iphon 12",
        "amount":147780,
        "date":"25/01/2021"
    }
];

export const expenseReducer=(state=dummyValues,action)=>{
    switch(action.type){

       
        case 'ADD_EXPENSE':
           return[...state,action.newExpense]
       
        case 'GET_EXPENSE':
            let new_array = state.map(element => element.id == action.newExpense.id ? {
           ...element,   id:action.newExpense.id, description:action.newExpense.description, amount:action.newExpense.amount,
           date:action.newExpense.date} : element);
              return new_array;
        
        case 'DELETE_EXPENSE': 
            let data = state.filter((element) => element.id != action.newExpense.id ? {...element}: "")
            return [...data]
        
         
        default:
            return state;
    }
}
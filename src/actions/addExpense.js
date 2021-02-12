//Action is js Object with compulsary type property
//payload:{newExpense{description,amount,date}
//payload.newExpense
export const addExpense=(payload)=>{
    return{
        type:'ADD_EXPENSE',
        newExpense:payload.newExpense
    }
}
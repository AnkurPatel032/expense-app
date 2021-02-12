export const getExpense=(payload)=>{
    return{
        type:'GET_EXPENSE',
        newExpense:payload.newExpense
    }
}


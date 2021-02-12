export const deleteExpense=(payload)=>{
    return{
        type:'DELETE_EXPENSE',
        newExpense:payload.newExpense
    }
}


const dummyValues={
        "description":'',
        
};

export const filterReducer=(state=dummyValues,action)=>{
    switch(action.type){
       
             case 'FILTER_EXPENSE':
               return{
                   
                state
               
             }
                           
        default:
            return state;
    }
}
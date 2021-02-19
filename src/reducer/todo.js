const initialState ={
    data :[]
}

const todos = (state =initialState , action) => {
    switch(action.type){
        case "Add_Todo":
            return{
                ...state ,
                data:[
                    ...state.data,
                    {
                        msg:action.msg,
                        id:action.id 
                    }
                ]

            }
             
            

        case " Delete_Todo":
            const todos = state.data.filter(()=>todo.id !== action.id)
            return{
                ...state,
                data:todos
            }
        default:
            return state ;
    }

};

export default todos ;
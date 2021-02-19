


const Add_Todo = "Add_Todo";
export const addtodo = (msg) =>({
    type: Add_Todo,
    msg ,
    id: Math.random()
}); 

 

const Delete_Todo ="Delete_Todo";
export  const deletetodo = (id) => ({

    type: Delete_Todo,
    id, 

})



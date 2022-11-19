import {
    createAsyncThunk,
    createSlice
} from "@reduxjs/toolkit";


export const getTodoAsync = createAsyncThunk(
    'todos/getTodoAsync',
    async () => {
        const res = await fetch('http://localhost:7000/todos')
        if (res.ok) {
            const data = await res.json()
            return {
                data
            }
        }
    }
)

export const addTodoAsync = createAsyncThunk(
    'todos/addTodoAsync',
    async (payload) => {
        try {
            const res = await fetch('http://localhost:7000/todos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title: payload.title
                })
            })
            if (res.ok) {
                const data = await res.json()
                return {
                    data
                }
            }

        } catch (err) {
            throw err
        }
    }
)

export const toggleTodoAsync = createAsyncThunk(
    'todos/toggleTodoAsync',
    async (payload) => {
        const res = await fetch(`http://localhost:7000/todos/${payload.id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                completed: payload.completed
            })
        })
        if (res.ok) {
            const data = await res.json()
            return {
                data
            }
        }

    }
)

export const deleteTodoAsync = createAsyncThunk(
    'todos/deleteTodoAsync',
    async (payload) => {
        const res = await fetch(`http://localhost:7000/todos/${payload.id}`, {
            method: "DELETE",
           
           
        })
        if(res.ok){
            return {id:payload.id}
        }
    }
)





const initialState = []

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        // addTodo: (state, action) => {
        //     const newTodo = {
        //         id: Date.now(),
        //         title: action.payload.title,
        //         completed: false
        //     }
        //     state.push(newTodo)
        // },
        // toggleTodo: (state, action) => {
        //     const index = state.findIndex((todo) => todo.id === action.payload.id)
        //     state[index].completed = action.payload.completed
        // },
        // deleteTodo: (state, action) => {
        //     return state.filter((todo) => todo.id !== action.payload.id)
        // }
    },
    extraReducers: {
        [getTodoAsync.pending]: (state, action) => {
            console.log("Fetching data...");
        },
        [getTodoAsync.fulfilled]: (state, action) => {
            console.log("Fetched data successfully!");
            return action.payload.data
        },
        [addTodoAsync.fulfilled]: (state, action) => {
            state.push(action.payload.data)
        },
        [toggleTodoAsync.fulfilled]: (state, action) => {
            const index = state.findIndex((todo) => todo.id === action.payload.data.id)
            state[index].completed = action.payload.data.completed
        },
        [deleteTodoAsync.fulfilled]:(state,action)=>{
            console.log("deleted todo");
            return state.filter((todo)=>todo.id!==action.payload.id)
        }
    }

})


export const {
    addTodo,
    toggleTodo,
    deleteTodo
} = todoSlice.actions
export default todoSlice.reducer
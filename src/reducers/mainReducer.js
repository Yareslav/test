import {createReducer,createAction} from "@reduxjs/toolkit";
const itemsFromStorage=JSON.parse(localStorage.getItem("data"));
const initialState={
	todos:itemsFromStorage ? itemsFromStorage : []
}
export const create=createAction("CREATE");
export const update=createAction("UPDATE");
export const check=createAction("CHECK");
export const remove=createAction("REMOVE")
export default createReducer(initialState,{
	[create]:(state,{payload})=>{
		state.todos.push({
			name:payload,
			checked:false
		});
		insertIntoMemory(state);
	},
	[update]:(state,{payload})=>{
		state.todos[payload.index].name=payload.name;
		insertIntoMemory(state);
	},
	[check]:(state,{payload})=>{
		state.todos[payload].checked=!state.todos[payload].checked;
		insertIntoMemory(state);
	},
	[remove]:(state,{payload})=>{
		state.todos.splice(payload,1);
		insertIntoMemory(state);
	},
})
function insertIntoMemory({todos}) {
	localStorage.setItem("data",JSON.stringify(todos));
}
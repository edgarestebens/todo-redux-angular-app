import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { borrar, crear,editar,limpiarTodos,toggle, togleAll } from './todo.actions';
 
export const estadoInicial: Todo[] = [
  new Todo('salvar al mundo'),
  new Todo('vencer a thanos'),
  new Todo('comprar traje de ironman'),
  new Todo('robar escudo del capitan america'),
  
];
 
const _todoReducer = createReducer(
    estadoInicial,
  on(crear, (state, { texto }) => [...state, new Todo( texto)] ),
  on(limpiarTodos, (state) => state.filter(todo => !todo.completado)),
  on( borrar, (state, {id}) => state.filter( todo => todo.id !== id)),

  on( togleAll, (state, {completado}) => state.map( todo => {

  return{
    ...todo,
    completado: completado
  }
  })),

  
  on(toggle, (state, { id }) => {
    
    return state.map( todo =>{

      if(todo.id === id){
        return{
          ...todo,
          completado: !todo.completado
        }
      }else{
        return todo;
      }
    });
  }),

  on(editar, (state, { id, texto }) => {
    
    return state.map( todo =>{

      if(todo.id === id){
        return{
          ...todo,
          texto: texto
        }
      }else{
        return todo;
      }
    });
  }),

);
 
export function todoReducer(state, action) {
  return _todoReducer(state, action);
}
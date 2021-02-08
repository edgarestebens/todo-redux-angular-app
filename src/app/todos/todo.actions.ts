import { createAction, props } from '@ngrx/store';

export const limpiarTodos = createAction('[TODO] LimpiarTodos');

export const crear = createAction(
    '[TODO] CREAR TODO',
    props<{texto: string}>()
);

export const toggle = createAction(
    '[TODO] Toggle Todo',
    props<{id: number}>()
);

export const editar = createAction(
    '[TODO] Editar Todo',
    props<{id: number, texto: string}>()
);

export const borrar = createAction(
    '[TODO] Borrar Todo',
    props<{id: number}>()
);

export const togleAll = createAction(
    '[TODO] Toggle TodoAll',
    props<{completado: boolean}>()
);


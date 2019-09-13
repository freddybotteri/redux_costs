import { ActionReducerMap } from '@ngrx/store';
import * as reducers from './reducers';

import * as fromUI from '../shared/ui.reducer';
import * as fromAuth from '../auth/auth.reducer';
import * as fromIngresoEgreso from '../ingreso-egreso/ingreso-egreso.reducer';

export interface AppState {
	ui: fromUI.State;
    auth: fromAuth.AuthState;
    ingresoEgreso: fromIngresoEgreso.IngresoEgresoState;
    usuarios: reducers.UsuariosState;
    usuario: reducers.UsuarioState;
}

export const appReducers: ActionReducerMap<AppState> = {
	ui: fromUI.uiReducer,
    auth: fromAuth.authReducer,
    ingresoEgreso: fromIngresoEgreso.ingresoEgresoReducer,
    usuarios: reducers.usuariosReducer,
    usuario: reducers.usuarioReducer
};

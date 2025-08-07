import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as usuariosActions from '../actions';
import { catchError, map, mergeMap, of } from 'rxjs';
import { UsuariosService } from '../../services/usuarios.service';

@Injectable()
export class UsuarioEffects {
    private actions$ = inject(Actions);
    private usuariosService = inject(UsuariosService);

    cargarUsuario$ = createEffect(
        ()=> this.actions$.pipe(
            ofType( usuariosActions.cargarUsuario),
            mergeMap(
                (action)=> this.usuariosService.getUserById(action.id)
                .pipe(
                    map(user=>usuariosActions.cargarUsuarioSuccess({usuario: user})),
                    catchError(err=> of(usuariosActions.cargarUsuarioError({payload: err})))
                )
            )
        )
    );

}
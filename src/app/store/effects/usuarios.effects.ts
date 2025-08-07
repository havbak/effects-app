import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as usuariosActions from '../actions';
import { catchError, map, mergeMap, of, tap } from 'rxjs';
import { UsuariosService } from '../../services/usuarios.service';
import { cargarUsuariosError } from '../actions/usuarios.actions';

@Injectable()
export class UsuariosEffects {
    private actions$ = inject(Actions);
    private usuariosService = inject(UsuariosService);

    cargarUsuarios$ = createEffect(
        ()=> this.actions$.pipe(
            ofType( usuariosActions.cargarUsuarios),
            mergeMap(
                ()=> this.usuariosService.getUsers()
                .pipe(
                    map(users=>usuariosActions.cargarUsuariosSuccess({usuarios: users})),
                    catchError(err=> of(usuariosActions.cargarUsuariosError({payload: err})))
                )
            )
        )
    );

}
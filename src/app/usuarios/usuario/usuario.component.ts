import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { UsuariosService } from '../../services/usuarios.service';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducers';
import { cargarUsuario } from '../../store/actions';
import { UsuarioState } from '../../store/reducers';

@Component({
  selector: 'app-usuario',
  imports: [],
  templateUrl: './usuario.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsuarioComponent {
  store = inject(Store<AppState>);
  activatedRoute = inject(ActivatedRoute);
  usuariosService = inject(UsuariosService);
  currentUser = toSignal(
    this.activatedRoute.params.pipe(
      map(({ id }) => {
        this.store.dispatch(cargarUsuario({ id }))
      })
    )
  )

  usuario = toSignal<UsuarioState>(this.store
    .pipe(
      select((state: any) => state['usuario']),
      map(user => {
        return user
      })
    ));


    
}

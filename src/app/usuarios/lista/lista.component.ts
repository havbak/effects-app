import { ChangeDetectionStrategy, Component, inject, OnInit, } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducers';
import { cargarUsuarios } from '../../store/actions';
import { toSignal } from '@angular/core/rxjs-interop';
import { UsuariosState } from '../../store/reducers';
import { map } from 'rxjs';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-lista',
  imports: [JsonPipe],
  templateUrl: './lista.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListaComponent implements OnInit {
  store = inject(Store<AppState>);
  
  usuarios = toSignal<UsuariosState>(this.store
    .pipe(
      select((state: any) => state['usuarios']),
      map(users => {
        return users
      })
    ));

  // usuerioService = inject(UsuarioService);
  // usuarios = signal<Usuario[] | null>(null);
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.store.dispatch(cargarUsuarios());
    
  }
}

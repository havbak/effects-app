import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-lista',
  imports: [],
  templateUrl: './lista.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListaComponent implements OnInit {
  usuerioService = inject(UsuarioService);
  usuarios = signal<Usuario[] | null>(null);
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.usuerioService.getUsers()
    .subscribe(usuarios=>{
      this.usuarios.set(usuarios);
    });
  }
}

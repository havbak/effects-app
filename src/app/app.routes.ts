import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'home', loadComponent: () => import('./usuarios/lista/lista.component').then(mod => mod.ListaComponent) },
    { path: 'usuario/:id', loadComponent: () => import('./usuarios/usuario/usuario.component').then(mod => mod.UsuarioComponent) },
    { path: '**', redirectTo: 'home' },
];

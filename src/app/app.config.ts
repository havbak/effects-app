import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { environment } from '../environments/environment.development';
import { appReducers } from './store/app.reducers';
import { provideEffects } from '@ngrx/effects';
import { UsuariosEffects } from './store/effects/usuarios.effects';
import { UsuarioEffects } from './store/effects/usuario.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideHttpClient(),
    provideStore(appReducers),
    provideStoreDevtools({ maxAge: 25, logOnly: environment.production }),
    provideEffects(UsuariosEffects, UsuarioEffects)
  ]
};

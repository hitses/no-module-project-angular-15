import { AppComponent } from './app/app.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { Routes, provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { httpInterceptor } from './app/shared/interceptors/http.interceptor';

const routes: Routes = [
  { path: '', redirectTo: 'form', pathMatch: 'full' },
  {
    path: 'form',
    loadComponent: () =>
      import('./app/components/form/form.component').then(
        (m) => m.FormComponent
      ),
  },
];

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withInterceptors([httpInterceptor])),
    provideRouter(routes),
  ],
}).catch((err) => console.error(err));

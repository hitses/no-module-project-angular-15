import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from 'src/environments/environment';

export const httpInterceptor: HttpInterceptorFn = (req, next) => {
  const cloneReq = req.clone({
    setHeaders: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${environment.apiKey}`,
    },
  });

  return next(cloneReq);
};

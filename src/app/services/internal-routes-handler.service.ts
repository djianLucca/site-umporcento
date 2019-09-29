import { Injectable } from '@angular/core';
import { IinternalRouteHandler } from './interfaces/iinternal-route-handler';
import { InternalRoutesService } from './internal-routes.service';

@Injectable({
  providedIn: 'root'
})
export class InternalRoutesHandlerService implements IinternalRouteHandler {

  _internalRoutes: InternalRoutesService[];

  constructor(internalRoutes: InternalRoutesService[]) {
    this._internalRoutes = internalRoutes;
  }

  takeAction(route: string): boolean {
    this._internalRoutes.forEach(element => {
      if (element.url === route) {
        element.action();
        return true;
      }
      return false;
    });
    return false;
  }
}

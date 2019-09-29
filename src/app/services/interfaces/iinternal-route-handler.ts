import { InternalRoutesService } from '../internal-routes.service';

export interface IinternalRouteHandler {
    _internalRoutes: InternalRoutesService[];

    takeAction(route: string): boolean;
}

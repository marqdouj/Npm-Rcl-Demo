import * as atlas from "azure-maps-control";
import { Security } from '../security/security';

export class Core {
    private static maps: Map<string, atlas.Map> = new Map<string, atlas.Map>();

    public static addMap(
        mapId: string,
        auth: Security.Authentication): void {

        if (this.maps.has(mapId)) {
            console.error(`Map with ID ${mapId} already exists.`);
            return;
        }

        const map = new atlas.Map(mapId, {
            authOptions: {
                authType: auth.authType,
                subscriptionKey: auth.subscriptionKey,
                aadAppId: auth.aadAppId,
                aadTenant: auth.aadTenant,
                clientId: auth.clientId,
            },
            center: [-122.33, 47.6],
            zoom: 12,
            view: "Auto",
        });

        this.maps.set(mapId, map);
    }
}
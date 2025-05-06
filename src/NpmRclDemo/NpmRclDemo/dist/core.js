import * as atlas from "azure-maps-control";
export class Core {
    static addMap(mapId, auth) {
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
Core.maps = new Map();
//# sourceMappingURL=core.js.map
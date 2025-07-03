import * as atlas from "azure-maps-control";

export namespace Security {
    export interface Authentication {
        authType: atlas.AuthenticationType;
        aadAppId: string;
        aadTenant: string;
        clientId: string;
        subscriptionKey: string;
    }
}
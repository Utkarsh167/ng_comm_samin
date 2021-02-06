declare module Subscription {

    export interface SubscriptionList {
        _id: string;
        created: any;
        status: string;
        name: string;
        price: string;
        gracePeriod: number;
        description: string;
        validity?: number;
    }

    export interface Data {
        subscriptionList: SubscriptionList[];
        totalCount: number;
    }

    export interface RootObject {
        statusCode: number;
        message: string;
        data: Data;
    }

}


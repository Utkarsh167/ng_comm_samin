declare module Notifications {

    export interface NotificationList {
        _id: string;
        created: any;
        platform: string;
        adminType: string;
        title: string;
        audience: string;
        message: string;
        image: string;
        createdAt: Date;
        updatedAt: Date;
        sentCount: number;
    }

    export interface Data {
        notificationList: NotificationList[];
        totalRecord: number;
    }

    export interface RootObject {
        statusCode: number;
        message: string;
        data: Data;
    }

}


declare module Earnings {

    export interface EarningList {
        _id: string;
        totalAmount: number;
        created: any;
        name: string;
        companyCode: string;
        paymentType: string;
        companyId: string;
        paymentDate: any;
        plan: string;
        amount: number;
    }

    export interface Data {
        earningList: EarningList[];
        totalCount: number;
        totalAmount: number;
    }

    export interface RootObject {
        statusCode: number;
        message: string;
        data: Data;
    }

}


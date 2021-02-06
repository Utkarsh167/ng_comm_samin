declare module Company {

    export interface ContactNumber {
        phoneNumber: string;
    }

    export interface CompanyBranch {
        _id: string;
        address: string;
        type: string;
        coordinates: number[];
    }

    export interface CompanyList {
        _id: string;
        adminType: string;
        created: any;
        status: string;
        email: string;
        name: string;
        companyCode: string;
        companyType: string;
        totalEmp: number;
        paymentType: string;
        serverType: string;
        url: string;
        contactNumber: ContactNumber[];
        companyId: string;
        companyBranch: CompanyBranch;
    }

    export interface Data {
        companyList: CompanyList[];
        totalCount: number;
    }

    export interface RootObject {
        statusCode: number;
        message: string;
        data: Data;
    }

}


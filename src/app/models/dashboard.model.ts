declare module Dashboard {

    export interface CompanyType {
        _id: string;
        type: string;
    }

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
        totalEmp: number;
        created: number;
        status: string;
        email: string;
        name: string;
        companyCode: string;
        companyType: CompanyType;
        paymentType: string;
        serverType: string;
        url: string;
        contactNumber: ContactNumber[];
        companyId: string;
        companyBranch: CompanyBranch;
        paymentDate: number;
        plan: string;
        amount: number;
        expiryDate: number;
        expiryEndDate: number;
        gracePeriod: number;
        year: number;
        month: number;
    }

    export interface Data {
        companyList: CompanyList[];
        totalCount: number;
        totalEarning: number;
        totalCompany: number;
        expiringInMonth: number;
        expiredCompany: number;
        activeCompany: number;
    }

    export interface RootObject {
        statusCode: number;
        message: string;
        data: Data;
    }
}
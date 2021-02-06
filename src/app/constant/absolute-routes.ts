import * as routes from "./routes";

export const LOGIN = `/${routes.ACCOUNT}/${routes.LOGIN}`;

export const FORGOT_PASSWORD = `/${routes.ACCOUNT}/${routes.FORGOT_PASSWORD}`;

export const DASHBOARD = `/${routes.ADMIN}/${routes.DASHBOARD}`;

export const COMPANY = `/${routes.ADMIN}/${routes.COMPANY}`;

export const COMPANY_ADD = `/${routes.ADMIN}/${routes.COMPANY}/${routes.COMPANY_ADD}`;

export const COMPANY_DETAIL = `/${routes.ADMIN}/${routes.COMPANY}/${routes.COMPANY_DETAIL}`;

export const COMPANY_EDIT = `/${routes.ADMIN}/${routes.COMPANY}/${routes.COMPANY_EDIT}`;

export const SUBSCRIPTION = `/${routes.ADMIN}/${routes.SUBSCRIPTION}`;

export const SUBSCRIPTION_ADD = `/${routes.ADMIN}/${routes.SUBSCRIPTION}/${routes.SUBSCRIPTION_ADD}`;

export const SUBSCRIPTION_EDIT = `/${routes.ADMIN}/${routes.SUBSCRIPTION}/${routes.SUBSCRIPTION_EDIT}`;

export const SUBSCRIPTION_DETAIL = `/${routes.ADMIN}/${routes.SUBSCRIPTION}/${routes.SUBSCRIPTION_DETAIL}`;

export const EARNING = `/${routes.ADMIN}/${routes.EARNING}`;

export const EARNING_DETAIL = `/${routes.ADMIN}/${routes.EARNING}/${routes.EARNING_DETAIL}`;

export const NOTIFICATION = `/${routes.ADMIN}/${routes.NOTIFICATION}`;

export const NOTIFICATION_ADD = `/${routes.ADMIN}/${routes.NOTIFICATION}/${routes.NOTIFICATION_ADD}`;

export const SETTINGS = `/${routes.ADMIN}/${routes.SETTINGS}`;

export const HOME = `/${routes.ADMIN}/${routes.DASHBOARD}`;

export const ADMIN_PROFILE = `/${SETTINGS}/${routes.ADMIN_PROFILE}`;

export const CHANGE_PASSWORD = `/${SETTINGS}/${routes.CHANGE_PASSWORD}`;

export const EDIT_PROFILE = `/${SETTINGS}/${routes.EDIT_PROFILE}`;

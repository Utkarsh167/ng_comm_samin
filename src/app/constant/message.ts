export const POPUP_MESSAGES = {
    ok: 'Ok',
    close: 'Close',
    confrim: 'Confirmation',
    no: 'No',
    yes: 'Yes',
    passwordResetTitle: 'Reset Password',
    passwordResetLink: 'Password reset link has been sent to registered email id. Please follow the link to reset password .',
    profileEdited: 'Profile has been Edited successfully.',
    passwordChanged: 'Password has been changed successfully.',
    passwordChangedTitle: 'Change Password',
    invalidResetPasswordLink: 'Reset password link is expired',
    logout: 'Logout',
    logoutConfirmation: 'Do you wish to logout?',
    forgotPasswordTitle: "Forgot Your Password? Don't worry send us your registered email address and we will send you steps to reset your password."
};

export const SOMETHING_WENT_WRONG = 'Something went wrong , Please try again later.';

export const toTitleCase = (str) => {
    return str.replace(
        /\w\S*/g,
        function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}

export const VALIDATION_MESSAGES = {
    "confirm password": {
        matchPassword: "Confirm password is not matched with password"
    }
}

export const ADD_NOTIFICATION_MESSAGES = {
    notificationImage: 'Please upload a notification image'
};

export const invalidFileError = (message = 'jpeg/png images') => `Only ${message} are allowed`;

export const invalidFileSize = (size = 4) => `File size can not be more than ${size} MB`;

export const COMMON_MESSAGES = {
    ADDED: (type) => toTitleCase(type) + " has been added successfully",
    UPDATED: (type) => toTitleCase(type) + " has been updated successfully",
    RENEWE: (type) => toTitleCase(type) + " plan has been renewed successfully",
    BLOCKED: {
        confirm: (type) => `Do you want to block this ${type.toLowerCase()}?`,
        success: (type) => `${toTitleCase(type)} has been blocked successfully`
    },
    UNBLOCKED: {
        confirm: (type) => `Do you want to unblock this ${type.toLowerCase()}?`,
        success: (type) => `${toTitleCase(type)} has been unblocked successfully`
    },
    DELETED: {
        confirm: (type) => `Do you want to delete this ${type.toLowerCase()}?`,
        success: (type) => `${toTitleCase(type)} has been deleted successfully`
    }
};
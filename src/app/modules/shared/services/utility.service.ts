import { Injectable } from '@angular/core';
import { MatSnackBar, MatDialog } from '@angular/material';
import { POPUP_MESSAGES, SOMETHING_WENT_WRONG } from 'src/app/constant/message';
import { ConfirmationModalComponent } from '../components/confirmation-modal/confirmation-modal.component';

@Injectable()
export class UtilityService {
    constructor(
        private _dialog: MatDialog,
        private _snackBar: MatSnackBar,
    ) {
    }
    clearStorage() {
        localStorage.removeItem('fleet-super-admin-token');
        localStorage.removeItem('fleet-super-admin-id');
    }

    getUserId() {
        return localStorage.getItem('fleet-super-admin-id');
    }

    getAuthToken() {
        return localStorage.getItem('fleet-super-admin-token');
    }
    showAlert(message, type?) {
        this._snackBar.open(message, 'Close', {
            duration: 3000,
        });
    }
    trim(data) {
        for (const item in data) {
            if (typeof data[item] === 'string') {
                data[item] = data[item].trim();
            }
        }
        return data;
    }
    errorAlert(error) {
        let data = {
            title: '',
            message: (error && error.error && error.error.message) ? (error.error.message) : SOMETHING_WENT_WRONG,
            yes: POPUP_MESSAGES.close,
            hideCancelButton: true
        }
        this.openDialog(data).subscribe(success => {

        });
    }
    openDialog(data) {
        const dialogRef = this._dialog.open(ConfirmationModalComponent, {
            width: '505px',
            data: data
        });
        return dialogRef.afterClosed();
    }
}


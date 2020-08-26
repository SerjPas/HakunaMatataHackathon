import React from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogTitle} from '@material-ui/core';

const ConfirmDialog = (props) => {
    const {user, title, children, open, setOpen, onConfirm} = props;
    return (
        <Dialog
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="confirm-dialog"
        >
            <DialogTitle id="confirm-dialog">{title}</DialogTitle>
            <DialogContent>{children}</DialogContent>
            <DialogActions>
                <Button
                    variant="contained"
                    onClick={() => setOpen(false)}
                    color="primary"
                >
                    No
                </Button>
                <Button
                    variant="contained"
                    onClick={() => {
                        setOpen(false);
                        onConfirm(user.user_id);
                    }}
                    color="secondary"
                >
                    Yes
                </Button>
            </DialogActions>
        </Dialog>
    );
};
export default ConfirmDialog;
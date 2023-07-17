import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from "@mui/material";
import { ReactNode } from "react";

interface Props {
    handleClick: (userId: string) => void;
    handleClose: () => void;
    userId?: string;
    open: boolean,
    children?: ReactNode
    title: string,
    text?: ReactNode,
    action: string
}

function DialogComponent({ handleClose, handleClick, userId, open, children, title, text, action }: Props) {

    function onClick() {
        if (userId) {
            handleClick(userId)
        }
    }

    const onClose = () => {
        handleClose()
    };
    return (<>
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                {title}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    {text}
                </DialogContentText>
            </DialogContent>
            {children}
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button color="error" onClick={onClick} autoFocus>
                    {action}
                </Button>
            </DialogActions>
        </Dialog>
    </>);
}

export default DialogComponent;
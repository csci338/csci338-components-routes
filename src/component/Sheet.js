import React, { useState } from "react";
import { Button, Drawer } from "antd";
const Sheet = ({ children, title, buttonText }) => {
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Button type="primary" onClick={showDrawer}>
                {buttonText}
            </Button>
            <Drawer
                title={title}
                width={520}
                closable={false}
                onClose={onClose}
                open={open}
            >
                <p>{children}</p>
            </Drawer>
        </>
    );
};
export default Sheet;

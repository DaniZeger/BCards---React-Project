import { FormEventHandler, ReactNode } from "react";

interface Props {
    children: ReactNode,
    onSubmit: FormEventHandler<HTMLFormElement>,
    onReset: FormEventHandler<HTMLFormElement>
}

function FormLayout({ children, onSubmit, onReset }: Props) {
    return (
        <form
            onSubmit={onSubmit}
            style={{
                display: 'flex',
                flexDirection: 'column',
                width: '60%',
                margin: '1% auto'
            }}
            autoComplete="off"
            onReset={onReset}
        >
            {children}
        </form>
    );
}

export default FormLayout;
import { ReactNode } from "react";
import { Route, Routes } from "react-router-dom";

interface Props{
    children: ReactNode;
}

function RutaFalsa({children}:Props) {
    return (
        <Routes>
            {children}
            <Route path="*" element={<p>Página en construcción</p>} />
        </Routes>
    )
}

export default RutaFalsa;


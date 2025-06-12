import { BrowserRouter, Route, Routes } from "react-router-dom";
import AgendatePrivateZone from "./AgendatePrivateZone";
import AgendatePublicZone from "./AgendatePublicZone";

export const AgendateApp = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AgendatePublicZone />}></Route>
                <Route path="zona-agendate" element={<AgendatePublicZone />} />
                <Route path="zona-trx" element={<AgendatePrivateZone />} />
            </Routes>
        </BrowserRouter>
    );
}

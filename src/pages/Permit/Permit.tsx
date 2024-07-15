import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export default function Permit() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [clientId, setClientId] = useState("");
    const [continueParam, setContinueParam] = useState("");
    const [scopes, setScopes] = useState<string[]>([]);

    useEffect(() => {
        setClientId(searchParams.get("ClientId") ?? "");
        setContinueParam(searchParams.get("Continue") ?? "");
        setScopes(searchParams.getAll("scopes"));
    }, [searchParams]);
    
    return (
        <div>
            {clientId}<br/><br/>
            {continueParam}<br/><br/>
            {scopes.map((scope) => {
                return <>{scope}<br/></>
            })}<br/><br/>
        </div>
    );
}

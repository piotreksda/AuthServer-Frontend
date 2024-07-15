import { Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import LoginForm from "../../components/LoginForm/LoginForm";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import { useState } from "react";

enum FormTypes {
    Login,
    Register,
    Mfa
}

interface LoginPageState {
    currentForm: FormTypes;
}

export default function Login() {
    const { isLoggedIn } = useAuth();
    const [state, setState] = useState<LoginPageState>({ currentForm: FormTypes.Login });

    if (isLoggedIn) return <Navigate to={"/"} />;

    const toggleForm = (formType: FormTypes) => {
        setState({ currentForm: formType });
    };

    return (
        <div>
            {state.currentForm === FormTypes.Login && (
                <LoginForm onToggle={() => toggleForm(FormTypes.Register)} />
            )}
            {state.currentForm === FormTypes.Register && (
                <RegisterForm onToggle={() => toggleForm(FormTypes.Login)} />
            )}
        </div>
    );
}

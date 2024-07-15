import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { AuthApi } from "../../apis/AuthAPI";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface RegisterFormProps {
    onToggle: () => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onToggle }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
      });
    
      const {isLoggedIn} = useAuth();
      const navigate = useNavigate();
      const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
      };
    
      const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
    
        AuthApi.register(formData.email, formData.password)
        .then(() => {
            toast('Now you can login');
            onToggle();
        }).catch((err) => {
          // toast(`${err.message}`, {type: "error"});
        }).finally(() => {
          
        });
      };
      
    
      return (
        <form onSubmit={handleSubmit}>
          <label>
            Email:
            <input name="email" value={formData.email} onChange={handleInputChange} />
          </label>
          <label>
            Password:
            <input type="password" name="password" value={formData.password} onChange={handleInputChange} />
          </label>
          <button type="submit">Register</button>

          <button onClick={onToggle}>Login instend</button>
        </form>
      );
    };

export default RegisterForm;
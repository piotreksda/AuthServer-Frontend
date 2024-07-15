import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { AuthApi } from "../../apis/AuthAPI";

interface LoginFormProps {
  onToggle: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onToggle }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
      });
    
      const {isLoggedIn, login} = useAuth();
      const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
      };
    
      const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
    
        AuthApi.login(formData.email, formData.password)
        .then(() => {
          login();
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
          <button type="submit">Submit</button>

          <button onClick={onToggle}>register instend</button>
        </form>
      );
    };


export default LoginForm;
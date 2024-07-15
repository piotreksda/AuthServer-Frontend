import {ReactNode, useEffect} from 'react';
import { api } from '../../apis/configs/axiosConfig';
import { toast } from 'react-toastify';
import { useAuth } from '../../contexts/AuthContext';

interface AxiosErrorHandlerProps {
    children: ReactNode;
}

const AxiosErrorHandler = ({children} : AxiosErrorHandlerProps) => {
  const {logout} = useAuth();
  useEffect(() => {
    // Request interceptor
    const requestInterceptor = api.interceptors.request.use((request) => {
      // Do something here with request if you need to
      return request;
    });

    // Response interceptor
    const responseInterceptor = api.interceptors.response.use((response) => {
      // Handle response here

      return response;
    }, (error) => {
      console.log(error)
      toast(error.response.data, {type: "error"});
      // Handle errors here
      if (error.response?.status) {
        switch (error.response.status) {
          case 401:
            logout();
            // Handle Unauthenticated here
            break;
          case 403:
            // Handle Unauthorized here
            break;
          // ... And so on
        }
      }

      throw error;
    });

    return () => {
      api.interceptors.request.eject(requestInterceptor);
      api.interceptors.response.eject(responseInterceptor);
    };
  }, []);

  return children;
};

export default AxiosErrorHandler;
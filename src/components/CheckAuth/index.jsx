import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { checkAuthStatus } from '../../api';


export const CheckAuth = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        const checkLoginStatus = async () => {
            try {
                const authResponse = await checkAuthStatus();
                if (authResponse?.data?.loggedIn) {
                    navigate('/dashboard');
                }
                else {
                    navigate('/login');
                }

            }
            catch (error) {
                console.log('Error while getting user details', error)
            }
            finally {
                setIsLoading(false);
            }
        }
        checkLoginStatus();
    }, [])

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return children;
}
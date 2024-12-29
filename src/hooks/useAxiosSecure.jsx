import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const axiosInstance = axios.create({
    baseURL: 'https://my-eleventh-assignment-server-pi.vercel.app',
    withCredentials: true
});

const useAxiosSecure = () => {
    const { logOut } = useContext(AuthContext);
    const navigate = useNavigate();


    useEffect(() => {
        axiosInstance.interceptors.response.use(response => {
            return response
        }, error => {
            // console.log('error caught in interceptor', error);
            if (error.status === 401 || error.status === 403) {
                // console.log('need to logout the user');
                logOut()
                    .then(() => {
                        // console.log('logged out user')
                        navigate('/login');
                    })
                .catch(error => {
                    // console.log(error)
                })
            }
            return Promise.reject(error);
        })
    }, [])
    return axiosInstance;
};

export default useAxiosSecure;
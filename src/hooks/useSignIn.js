import {  useMutation } from '@apollo/react-hooks';
import { LOGIN } from '../graphql/queries';
import { useContext } from 'react';
import { useApolloClient } from '@apollo/client';


import AuthStorageContext from '../contexts/AuthStorageContext';



const useSignIn = () => {
    const authStorage = useContext(AuthStorageContext);
    const [login, result] = useMutation(LOGIN);

    const signIn = async ({ username, password }) => {
        const credentials = {
            username: username,
            password: password
        };
        login({ variables: { credentials } });
    };

    const addToken = async () => {
       const apolloClient = useApolloClient();
        if (result.data) {
            await authStorage.setAccessToken(result.data.authorize.accessToken);
            apolloClient.resetStore();
        }
    };

    addToken();
    return [signIn, result];
};

export default useSignIn;
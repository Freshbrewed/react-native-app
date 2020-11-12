import { useMutation } from '@apollo/react-hooks';
import { LOGIN } from '../graphql/queries';

const useSignIn = () => {
    const [login, result] = useMutation(LOGIN);
  
    const signIn = async ({ username, password }) => {
        const credentials = {
            username: username,
            password: password
        };
        login({ variables: { credentials } });
    };
      return [signIn, result];
  };

  export default useSignIn;
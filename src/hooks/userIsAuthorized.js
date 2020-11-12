import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { IS_AUTHORIZED } from '../graphql/queries';

const useIsAuthorized = () => {
 const [user, setUser] = useState();
  const { data, loading } = useQuery(IS_AUTHORIZED, {
    fetchPolicy: 'cache-and-network'});

  useEffect(() => {
    if (data) {
        setUser(data.authorizedUser);
    }
  }, [data]);

  return { user, loading };
};

export default useIsAuthorized;
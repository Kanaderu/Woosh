import { useEffect, useState } from 'react';
import { Service } from '../types/Service';

import { SocialIndexAPI } from '../types/SocialAPI';
import Settings from '../constants';

const useGetSocialService = () => {
  const [result, setResult] = useState<Service<SocialIndexAPI>>({
    status: 'loading'
  });

  useEffect(() => {
    fetch(Settings.socialEndpointAPI)
      .then(response => response.json())
      .then(response => setResult({
        status: 'loaded',
        payload: response
      }))
      .catch(error => setResult({
        status: 'error',
        error: error
      }));
  }, []);

  return result;
};

export default useGetSocialService;

import { useEffect, useState } from 'react';
import { Service } from '../types/Service';

import { InfoIndexAPI } from '../types/InfoAPI';
import Settings from '../constants';

const useGetInfoService = () => {
  const [result, setResult] = useState<Service<InfoIndexAPI>>({
    status: 'loading'
  });

  useEffect(() => {
    fetch(Settings.infoEndpointAPI)
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

export default useGetInfoService;

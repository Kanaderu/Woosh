import { useEffect, useState } from 'react';
import { Service } from '../types/Service';

import { HomePageIndexAPI } from '../types/HomePageAPI';
import Settings from '../constants';

const useGetHomePageService = () => {
  const [result, setResult] = useState<Service<HomePageIndexAPI>>({
    status: 'loading'
  });

  useEffect(() => {
    fetch(Settings.homePageEndpointAPI)
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

export default useGetHomePageService;

import { useEffect, useState } from 'react';
import { Service } from '../types/Service';
import { BlogIndexAPI } from '../types/BlogIndexAPI';

import Settings from '../constants';

const useGetBlogIndexService = () => {
  const [result, setResult] = useState<Service<BlogIndexAPI>>({
    status: 'loading'
  });

  useEffect(() => {
    fetch(Settings.blogIndexEndpointAPI)
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

export default useGetBlogIndexService;

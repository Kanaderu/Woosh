import { useEffect, useState } from 'react';
import { Service } from '../types/Service';

import { BlogPostAPI } from '../types/BlogPostAPI';
import Settings from '../constants';

const useGetBlogPostService = (id:number) => {
  const [result, setResult] = useState<Service<BlogPostAPI>>({
    status: 'loading'
  });

  useEffect(() => {
    fetch(Settings.blogPostEndpointAPI(id))
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

export default useGetBlogPostService;

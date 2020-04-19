import ImageAPI from './ImageAPI';

export interface BlogIndexAPI {
  items: BlogIndexDataAPI[];
  meta: BlogIndexMetaAPI;
};

export interface BlogIndexMetaAPI {
  total_count: number;
};

export interface BlogIndexDataAPI {
  author: string;
  date: string;
  id: number;
  intro: string;
  meta: BlogIndexDataMetaAPI;
  title: string;
  header_image: ImageAPI;
};

export interface BlogIndexDataMetaAPI {
  detail_url: string;
  type: string;
};

export default BlogIndexAPI;

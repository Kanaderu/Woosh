import ImageAPI from './ImageAPI';
import Author from './Author';

export interface BlogIndexAPI {
  items: BlogIndexDataAPI[];
  meta: BlogIndexMetaAPI;
};

export interface BlogIndexMetaAPI {
  total_count: number;
};

export interface BlogIndexDataAPI {
  author: Author;
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

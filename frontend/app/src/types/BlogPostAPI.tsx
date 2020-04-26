import ImageAPI from './ImageAPI';
import Author from './Author';

export interface BlogPostAPI {
  author: Author;
  id: number;
  meta: BlogIndexMetaAPI;
  date: string;
  title: string;
  subtitle: string;
  intro: string;
  body: BlogPostBodyAPI[];
  header_image: ImageAPI;
};

export interface BlogPostBodyAPI {
  type: string;
  value: any;
  id: string;
};

export interface BlogIndexMetaAPI {
  detail_url: string;
  type: string;
};

export default BlogPostAPI;

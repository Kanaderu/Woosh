import ImageAPI from './ImageAPI';
import Author from './Author';
import {BodyAPI, MetaAPI} from './BaseAPI';

export interface BlogPostAPI {
  author: Author;
  id: number;
  meta: MetaAPI;
  date: string;
  title: string;
  subtitle: string;
  intro: string;
  body: BodyAPI[];
  header_image: ImageAPI;
};

export default BlogPostAPI;

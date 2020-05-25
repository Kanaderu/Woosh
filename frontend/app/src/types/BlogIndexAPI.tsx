import ImageAPI from './ImageAPI';
import Author from './Author';
import {MetaAPI, IndexMetaAPI} from './BaseAPI';

export interface BlogIndexAPI {
  items: BlogIndexDataAPI[];
  meta: IndexMetaAPI;
};

export interface BlogIndexDataAPI {
  author: Author;
  date: string;
  id: number;
  intro: string;
  meta: MetaAPI;
  title: string;
  header_image: ImageAPI;
};

export default BlogIndexAPI;

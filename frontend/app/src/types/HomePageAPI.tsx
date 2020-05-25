import ImageAPI from './ImageAPI';
import Author from './Author';
import {BodyAPI, MetaAPI, IndexMetaAPI} from './BaseAPI';

export interface HomePageIndexAPI {
  items: HomePageAPI[];
  meta: IndexMetaAPI;
};

export interface HomePageAPI {
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

export default HomePageAPI;

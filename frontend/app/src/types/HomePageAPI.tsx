// import ImageAPI from './ImageAPI';
import Author from './Author';
import { BodyAPI, MetaAPI, IndexMetaAPI } from './BaseAPI';

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
  body: BodyAPI[];
  carousel_images: BodyAPI[];
};

export default HomePageAPI;

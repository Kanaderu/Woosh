import { MetaAPI, IndexMetaAPI } from './BaseAPI';

export interface HomePageIndexAPI {
  items: SocialAPI[];
  meta: IndexMetaAPI;
};

export interface SocialAPI {
  id: number;
  meta: MetaAPI;
  title: string;
  platform: string;
};

export default SocialAPI;

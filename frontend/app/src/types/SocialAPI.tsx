import { MetaAPI, IndexMetaAPI } from './BaseAPI';

export interface SocialIndexAPI {
  items: SocialAPI[];
  meta: IndexMetaAPI;
};

export interface SocialAPI {
  id: number;
  meta: MetaAPI;
  url: string;
  platform: string;
};

export default SocialAPI;

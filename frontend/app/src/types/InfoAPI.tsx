import { MetaAPI, IndexMetaAPI } from './BaseAPI';

export interface InfoIndexAPI {
  items: InfoAPI[];
  meta: IndexMetaAPI;
};

export interface InfoAPI {
  id: number;
  meta: MetaAPI;
  about_footer_info: string;
  newsletter_info: string;
};

export default InfoAPI;

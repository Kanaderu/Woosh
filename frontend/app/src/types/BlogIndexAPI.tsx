export interface BlogIndexAPI {
  items: BlogIndexDataAPI[];
  meta: BlogIndexMetaAPI;
};

export interface BlogIndexMetaAPI {
  total_count: number;
};

export interface BlogIndexDataAPI {
  date: string;
  id: number;
  intro: string;
  meta: BlogIndexDataMetaAPI;
  title: string;
};

export interface BlogIndexDataMetaAPI {
  detail_url: string;
  type: string;
};

export default BlogIndexAPI;

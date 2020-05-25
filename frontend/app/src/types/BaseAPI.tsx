export interface BodyAPI {
  type: string;
  value: any;
  id: string;
};

export interface MetaAPI {
  detail_url: string;
  type: string;
};

export interface IndexAPI {
  items: any[];
  meta: IndexMetaAPI;
};

export interface IndexMetaAPI {
  total_count: number;
};

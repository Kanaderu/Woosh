export interface BlogPostAPI {
  id: number;
  meta: BlogIndexMetaAPI;
  date: string;
  title: string;
  intro: string;
  body: BlogPostBodyAPI[];
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

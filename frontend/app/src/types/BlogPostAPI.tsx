export interface BlogPostAPI {
  id: number;
  meta: BlogIndexMetaAPI;
  date: string;
  title: string;
  subtitle: string;
  intro: string;
  body: BlogPostBodyAPI[];
  header_image: ImageAPI;
};

export interface ImageAPI {
  title: string;
  url: string;
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

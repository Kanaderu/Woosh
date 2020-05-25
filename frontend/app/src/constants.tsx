type constParams = {
  readonly blogIndexEndpointAPI: string;
  readonly blogPostEndpointAPI: Function;
  readonly homePageEndpointAPI: string;
  readonly socialEndpointAPI: string;
  readonly siteName: string;
  readonly siteDescription: string;
};

const Settings: constParams = {
  blogIndexEndpointAPI: "http://localhost:9090/api/blog/",
  blogPostEndpointAPI: (id:number) => ("http://localhost:9090/api/blog/" + id + "/"),
  homePageEndpointAPI: "http://localhost:9090/api/home/",
  socialEndpointAPI: "http://localhost:9090/api/social/",

  siteName: "Pandave",
  siteDescription: "Test site!"
};

export default Settings;

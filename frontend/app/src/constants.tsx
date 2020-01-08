type consts = {
  readonly blogIndexEndpointAPI: string;
  readonly blogPostEndpointAPI: Function;
  readonly siteName: string;
};

const Settings: consts = {
  blogIndexEndpointAPI: "http://localhost:8000/api/blog/",
  blogPostEndpointAPI: (id:number) => ("http://localhost:8000/api/blog/" + id + "/"),

  siteName: "Pandave",
};

export default Settings;

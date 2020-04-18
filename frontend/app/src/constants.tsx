type consts = {
  readonly blogIndexEndpointAPI: string;
  readonly blogPostEndpointAPI: Function;
  readonly siteName: string;
};

const Settings: consts = {
  blogIndexEndpointAPI: "http://localhost:9090/api/blog/",
  blogPostEndpointAPI: (id:number) => ("http://localhost:9090/api/blog/" + id + "/"),

  siteName: "Pandave",
};

export default Settings;

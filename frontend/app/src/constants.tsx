type consts = {
  readonly blogIndexEndpointAPI: string;
  readonly blogPostEndpointAPI: string;
};

const Settings: consts = {
  blogIndexEndpointAPI: "http://localhost:8000/api/blog/",
  blogPostEndpointAPI: "http://localhost:8000/api/blog/",
};

export default Settings;

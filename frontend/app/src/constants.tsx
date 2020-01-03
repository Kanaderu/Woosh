type consts = {
  readonly blogIndexEndpointAPI: string;
  readonly blogPostEndpointAPI: Function;
};

const Settings: consts = {
  blogIndexEndpointAPI: "http://localhost:8000/api/blog/",
  blogPostEndpointAPI: (id:number) => ("http://localhost:8000/api/blog/" + id + "/")
};

export default Settings;

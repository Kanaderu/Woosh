import { MetaAPI, IndexMetaAPI } from './BaseAPI';

export interface SocialIndexAPI {
  items: SocialAPI[];
  meta: IndexMetaAPI;
};

export interface SocialAPI {
  id: number;
  meta: MetaAPI;
  url: string;
  platform: string;
};

export default SocialAPI;

export const platformToSocialColor = (platform:string) => {
  var icon = "social-facebook";
  switch(platform) {
    case "Facebook":
      icon = "social-facebook";
      break;
    case "Google+":
      icon = "social-google-plus";
      break;
    case "Twitter":
      icon = "social-twitter";
      break;
    case "Instagram":
      icon = "social-instagram";
      break;
    case "Snapchat":
      icon = "social-snapchat";
      break;
    default:
      icon = "social-envelope";
      break;
  }
  return icon;
}

export const platformToFontAwesome = (platform: string) => {
  var icon = "fas fa-envelope";
  switch(platform) {
    case "Facebook":
      icon = "fab fa-facebook";
      break;
    case "Google+":
      icon = "fab fa-google-plus";
      break;
    case "Twitter":
      icon = "fab fa-twitter";
      break;
    case "Instagram":
      icon = "fab fa-instagram";
      break;
    case "Snapchat":
      icon = "fab fa-snapchat";
      break;
    default:
      icon = "fab fa-envelope";
      break;
  }
  return icon;
}

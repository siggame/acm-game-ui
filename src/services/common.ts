export function getImg(path: string) {
  return require(`@/assets/${path}`);
}

/// Valid social media sites.
export const VALID_SOCIALS = [
  'email',
  'linkedin',
  'github',
  'website',
  'steam',
  'twitter',
];

/// Transforms a commonly shared link format to one that is browser-friendly.
/// For example, email addresses in the browser are interpreted with "mailto:<ADDRESS>",
/// but I personally don't want to write that into everyone's social dictionary in this code.
/// So, this function easily adds things like that automatically,
/// allowing you to simply type in the unique information and ignore the boilerplate.
export function transformSocialLink(site: string, link: string): string {
  switch (site) {
    case 'email': {
      // Takes email address.
      return `mailto:${link}`;
    }
    case 'linkedin': {
      // Takes linkedin uri (which can be customized by the way).
      return `https://www.linkedin.com/in/${link}`;
    }
    case 'github': {
      // Takes github username.
      return `https://github.com/${link}`;
    }
    case 'steam': {
      // Either a custom link 'id/<custom_uri> or automatically generated 'profile/<id>'
      // Can't determine automatically, so must pass your account link as one of the above formats.
      return `https://steamcommunity.com/${link}`;
    }
    default: {
      return link;
    }
  }
}

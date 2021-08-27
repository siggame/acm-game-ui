export function getImg(path: string) {
  return require(`@/assets/${path}`);
}

/// Valid social media sites.
export const VALID_SOCIALS = [
  'email',
  'linkedin',
  'github',
  'steam',
  'twitter',
  'website', // a personal website
];

/// Transforms a commonly shared link format to one that is browser-friendly.
/// For example, email addresses in the browser are interpreted with "mailto:<ADDRESS>",
/// but I personally don't want to write that into everyone's info.
/// So, this function easily adds things like that automatically,
/// allowing you to simply type in the unique information and ignore the boilerplate.
/// Always test your links before pushing to production.
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
    case 'twitter': {
      // Takes twitter handle.
      return `https://twitter.com/${link}`;
    }
    default: {
      return link;
    }
  }
}

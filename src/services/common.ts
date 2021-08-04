export function getImg(path: string) {
  return require(`@/assets/${path}`);
}

/// Valid social media sites.
const VALID_SOCIALS = [
  'email',
  'linkedin',
  'github',
  'discord',
  'steam',
];

export function transformSocialLink(site: string, link: string): string {
  switch (site) {
    case 'email': {
      return `mailto:${link}`;
    }
    default: {
      return 'http://';
    }
  }
}

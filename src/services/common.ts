export function getImg(path: string) {
  return require(`@/assets/${path}`);
}

export default {
  getImg,
};

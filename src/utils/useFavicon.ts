export default function useFavicons(basePath?: string) {
  const isDev = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';

  // Default path based on environment
  const path = basePath || (isDev ? '/node_modules/@umeaenergi/ue-design/dist/favicons/' : '/favicons/');

  const head = document.head;

  const createLink = (rel: string, href: string, type?: string, color?: string, sizes?: string) => {
    const link = document.createElement('link');
    link.rel = rel;
    link.href = href;
    if (type) link.type = type;
    if (color) link.setAttribute('color', color);
    if (sizes) link.setAttribute('sizes', sizes);
    head.appendChild(link);
  };

  createLink('icon', `${path}favicon.svg`, 'image/svg+xml');
  createLink('alternate icon', `${path}favicon.ico`, 'image/x-icon');
  createLink('mask-icon', `${path}favicon.svg`, undefined, '#007f58');
  createLink('apple-touch-icon', `${path}apple-touch-icon.png`, undefined, undefined, '180x180');
}

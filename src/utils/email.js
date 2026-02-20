// Obfuscated email - nicht scrapbar aus HTML
export function getEmail(domain) {
  const user = 'hello';
  return `${user}@${domain}`;
}

export function mailtoLink(domain) {
  return `mailto:${getEmail(domain)}`;
}
const parseStringToHTML = (string) => {
  const parser = new DOMParser();
  return parser.parseFromString(string, 'text/html');
};

export default parseStringToHTML;

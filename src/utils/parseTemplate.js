import parseStringToHTML from './parseStringToHTML.js';

const parseTemplate = async (templateUrl) => {
  const data = await fetch(templateUrl);
  const templateString = await data.text();

  const parsedTemplate = parseStringToHTML(templateString);
  return parsedTemplate.querySelector('template').content;
};

export default parseTemplate;

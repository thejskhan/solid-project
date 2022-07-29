export const truncate = (text, length) => {
  if (text.length > length) {
    text = text.substring(0, length);
    text = text.substring(0, text.lastIndexOf(" "));
    return `${text}...`;
  }
  return text;
};

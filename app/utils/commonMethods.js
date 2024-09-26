export const initials = name => {
  if (name) {
    return name
      .split(' ')
      .map(word => word.charAt(0).toUpperCase())
      .join('');
  }
  return '';
};

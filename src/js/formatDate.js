export const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  const timezoneDiff = date.getTimezoneOffset() * 60000;
  const adjustedDate = new Date(date.valueOf() + timezoneDiff);

  return adjustedDate.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
};

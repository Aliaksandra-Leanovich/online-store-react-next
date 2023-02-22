export const useGetTimezone = () => {
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  var city = timezone.split('/')[1];

  return city;
};

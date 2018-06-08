export const search = query => (
  $.ajax({
    method: "GET",
    url: '/api/searches/assets',
    data: {query}
  })
);

export const search = query => (
  $.ajax({
    method: "GET",
    url: '/api/searches/assets',
    data: {query}
  })
);

export const getAsset = id => (
  $.ajax({
    method: "GET",
    url: `/api/assets/${id}`
  })
);

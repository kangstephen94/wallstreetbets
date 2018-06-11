export const search = query => (
  $.ajax({
    method: "GET",
    url: '/api/searches/assets',
    data: {query}
  })
);

export const getAsset = sym => (
  $.ajax({
    method: "GET",
    url: `/api/assets/${sym}`
  })
);

export const getData = sym => (
  $.ajax({
    method: "GET",
    url: `/api/data/${sym}`
  })
);

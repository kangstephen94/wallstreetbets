export const getWatchlist = () => (
  $.ajax({
    method: "GET",
    url: '/api/watchlists',
  })
);

export const addWatchlistItem = id => (
  $.ajax({
    method: "POST",
    url: '/api/watchlist_items',
    data: {id}
  })
);

export const removeWatchlistItem = id => (
  $.ajax({
    method: "DELETE",
    url: `/api/watchlist_items/${id}`,
  })
);

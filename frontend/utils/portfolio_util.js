export const getHoldings = () => (
  $.ajax({
    method: "GET",
    url: '/api/asset_ownerships',
  })
);

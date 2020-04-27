// Credential
const apiKey =
  'i4Due_YmEmhrBbslgfYtw6OyWaDhtDYjs0R9m-ZIBthJGQAQkyMeTkjw05u7iV1GQ65B676iQt4_0fSbSJc3ICesfLnEcbGzcnTNn-kI1CL2htrPBbhdaW86K1enXnYx';

  // Yelp Module
const Yelp = {};

const search(term, location, sortBy) {
  let url = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`;
  return fetch(url, {
    headers: {Authorization: `Bearer ${apiKey}`}})
    .then(response => response.json())
    
};
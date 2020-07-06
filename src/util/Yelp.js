const apiKey =
  "luSZ_j8ZlR9gIkWGRXv7kejaQNacq11EDbIkCx0addAcCwFpjymmjZNKmnTcisIuq5g7EGPB3qiaVdk8OsFR6G38eNNVr6bWSCmihueFjYyEGDwVlB-1bgeElh0CX3Yx";

const Yelp = {
  search(term, location, sortBy) {
    return fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}
    `,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((jsonResponse) => {
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map((business) => ({
            // console.log(business);
            id: business.id,
            imageSrc: business.image_url,
            url: business.url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories[0].title,
            rating: business.rating,
            reviewCount: business.review_count,
          }));
        }
      });
  },
};

export default Yelp;

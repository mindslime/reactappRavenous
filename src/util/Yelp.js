const apiKey = 'PNPNNVqIA_GTOSB_fKy-pkodE_UtcALeAVuEptZULu52I6J4PhUWZ_f3oK6j_Jtm1UKBr2HqOg_HP3laA35m3juLEG25lFiWDCTqSCkeDxLgBgmtMzbprFvf31csX3Yx';

const Yelp = {
  search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,{
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if (jsonResponse.businesses) {
        return jsonResponse.businesses.map(business => ({
          id: business.id,
          imageSrc: business.image_url,
          name: business.name,
          address: business.location.address1,
          city: business.location.city,
          state: business.location.state,
          zipCode: business.location.zip_code,
          category: business.categories[0].title,
          rating: business.rating,
          reviewCount: business.review_count,
          latitude: business.coordinates.latitude,
          longitude: business.coordinates.longitude,
          url: business.url
        }));
      }
    });
  }
};

export default Yelp;
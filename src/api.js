import axios from "axios"

export function searchHotels({ destination }) {
    let params = {};

    params.lookFor = "both"

    if (destination) {
        params.query = destination;
    }

    return axios
        .get("https://engine.hotellook.com/api/v2/lookup.json", {
            params
        })
        .then(function (response) {
            console.log("api is", response.data.results);
            return response.data.results;
        }).catch(() => {
            console.log("Try Searching something Else");
        });
}

const UNSPLASH_ACCESS_KEY = "IvrGIdavu-6TQWXk2SaZAAIt-d3uHcX85jjAPudaEcA";

export async function fetchHotelImage(destination) {
  try {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: {
        query: destination,
        client_id: UNSPLASH_ACCESS_KEY,
        per_page: 1,
      },
    });
    if (response.data.results.length > 0) {
      return response.data.results[0].urls.small;
    } else {
      return "https://via.placeholder.com/300"; // default image if no results
    }
  } catch (error) {
    console.error("Error fetching image from Unsplash", error);
    return "https://via.placeholder.com/300"; // default image in case of error
  }
}

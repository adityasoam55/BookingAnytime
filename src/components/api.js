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
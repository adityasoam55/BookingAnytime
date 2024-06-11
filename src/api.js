import axios from "axios";

export function getBookList() {
    return axios
        .get("https://openlibrary.org/search.json?q=YOUR_QUERY&limit=10&page=1/")
        .then((response) => {
            return response.data.docs;
        })
}
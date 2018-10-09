class Helper {
    static baseURL () {
        return "https://api.foursquare.com/v2";
    }
    static auth() {
        const keys = {
            client_id: "UBYJXUH5DXAO0XZ2YKVPBPS14PJUVIT112BOYULCBVOEOSG4",
            client_secret: "UCFQYL03242A1YW3O1QHHBVJKDPTE4A4QJI53LQWMYRN3THP",
            v: "20181008"
        };
        return Object.keys(keys)
        .map(key => `${key}=${keys[key]}`)
        .join("&");
    }
    static urlBuilder(urlParams) {
        if (!urlParams) {
            return "";
        }
        return Object.keys(urlParams)
        .map(key => `${key}=${urlParams[key]}`)
        .join("&");
    }
    static headers() {
        return {
            Accept: "application/json"
        };
    }
    static simpleFetch(endPoint, method, urlParams) {
        let requestData = {
            method,
            headers: Helper.headers()
        };
        return fetch(
            `${Helper.baseURL()}${endPoint}?${Helper.auth()}&${Helper.urlBuilder(
            urlParams
        )}`,
        requestData
        ).then(res => res.json());
    }
}
export default class SquareApi {
    static search(urlParams) {
        return Helper.simpleFetch("/venues/search", "GET", urlParams);
    }
    static getVenueDetails(VENUE_ID) {
        return Helper.simpleFetch(`/venues/${VENUE_ID}`, "GET");
    }
    static getVenuePhotos(VENUE_ID) {
        return Helper.simpleFetch(`/venues/${VENUE_ID}/photos`, "GET");
    }
}
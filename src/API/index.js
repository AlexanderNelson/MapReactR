class Helper {
    static baseURL () {
        return "https://api.foursquare.com/v2";
    }
    //keys for foursquare auth
    //version required-only update after code review
    static auth() {
        const keys = {
            client_id: "UBYJXUH5DXAO0XZ2YKVPBPS14PJUVIT112BOYULCBVOEOSG4",
            client_secret: "UCFQYL03242A1YW3O1QHHBVJKDPTE4A4QJI53LQWMYRN3THP",
            v: "20181008"
        };
        return Object.keys(keys)
        .map(key => `${key}=${keys[key]}`)
        .join('&');
    }
    static urlBuilder(urlParams) {
      if (!urlParams) {
        return '';
      }
      return Object.keys(urlParams)
        .map(key => `${key}=${urlParams[key]}`)
        .join('&');
    }
    static headers() {
      return {
        Accept: 'application/json'
      };
    }
    // https://medium.com/@yoniweisbrod/interacting-with-apis-using-react-native-fetch-9733f28566bb
    static checkStatus(response) {
      if (response.ok) {
        return response;
      } else {
        let error = new Error(response.statusText);
        error = response;
        throw error;
      }
    }
    static simpleFetch(endpoint, method, urlParams) {
      let requestData = {
        method,
        headers: Helper.headers()
      };
      return fetch(
        `${Helper.baseURL()}${endpoint}?${Helper.auth()}&${Helper.urlBuilder(
          urlParams
        )}`,
        requestData
      )
        .then(Helper.checkStatus)
        .then(response => response.json())
        .catch(error => {
          alert(
            'Unable to reach Foursquare' +
              error.response
          );
        });
    }
  }
  
  export default class SquareAPI {
    static search(urlParams) {
      return Helper.simpleFetch('/venues/search', 'GET', urlParams);
    }
    static getVenueDetails(VENUE_ID) {
      return Helper.simpleFetch(`/venues/${VENUE_ID}`, 'GET');
    }
    static getVenuePhotos(VENUE_ID) {
      return Helper.simpleFetch(`/venues/${VENUE_ID}/photos`, 'GET');
    }
  }
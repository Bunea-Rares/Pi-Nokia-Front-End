/***
 *
 * @param url - the url to get from
 * @return {Promise<Response>}  Returns the server response as a promise
 */

const deleteFetch = (url = "") => {
  return fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: "token " + localStorage.getItem("user-token"),
    },
  }).then((data) => data.json());
};

export default deleteFetch;

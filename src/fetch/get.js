/***
 *
 * @param url - the url to get from
 * @return {Promise<Response>}  Returns the server response as a promise
 */

const get = (url = "") => {
  return fetch(url, {
    headers: {
      "Content-Type": "application/json",
      authorization: "token " + localStorage.getItem("user-token"),
    },
  }).then((data) => data.json());
};

export default get;

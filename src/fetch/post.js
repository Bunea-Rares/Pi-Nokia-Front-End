/***
 *@param {string} url - the url to post to
 *@param {object} data - data attached to the body
 *
 *@returns {Promise<Response>} Returns the server response as a promise
 *
 * */
const post = (url = "", data = {}) => {
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: "token " + localStorage.getItem("user-token"),
    },
    body: JSON.stringify(data),
  }).then((data) => data.json());
};

export default post;

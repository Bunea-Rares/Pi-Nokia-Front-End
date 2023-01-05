/***
 *
 * @return {boolean} Returns true if user is logged in, false otherwise
 */

const userStatus = () => !!localStorage.getItem("username");

export default userStatus;

import fetch from "./fetch";

const getUser = id => fetch(`/users/${id}`);

export default getUser;

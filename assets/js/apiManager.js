const treeHouseURL = "https://teamtreehouse.com/keithpotempa.json";
const codeWarsURL = "https://codewars.com/api/v1/users/keithrpotempa";

export default {
  getTreeHouseProfile() {
    return fetch(`${treeHouseURL}`)
      .then(result => result.json())
  },
  getCodeWarsProfile() {
    return fetch(`${codeWarsURL}`)
      .then(result => result.json())
  },
  //   return fetch(`${codeWarsURL}`, {
  //     method: 'GET', // *GET, POST, PUT, DELETE, etc.
  //     mode: 'no-cors', // no-cors, *cors, same-origin
  //     // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
  //     // credentials: 'include', // include, *same-origin, omit
  //     // headers: {
  //     //   'Content-Type': 'application/json'
  //     //   // 'Content-Type': 'application/x-www-form-urlencoded',
  //     // },
  //     redirect: 'follow', // manual, *follow, error
  //     // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  //     // body: JSON.stringify(data) // body data type must match "Content-Type" header
  //   })//.then(result => result.json())
  // },
}
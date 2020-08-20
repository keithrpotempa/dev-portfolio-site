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
}
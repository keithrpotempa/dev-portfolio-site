const treeHouseURL = "https://teamtreehouse.com/keithpotempa.json";
// const codeWarsURL = "https://www.codewars.com/api/v1/users/keithrpotempa";

export default {
  getTreeHouseProfile() {
    return fetch(`${treeHouseURL}`)
      .then(result => result.json())
  },
}
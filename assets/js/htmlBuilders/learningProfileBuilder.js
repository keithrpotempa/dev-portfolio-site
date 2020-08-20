import apiManager from "../apiManager.js";
import objectSorter from "../helpers/objectSorter.js";

const treeHouseProfile = apiManager.getTreeHouseProfile();
const codeWarsProfile = apiManager.getCodeWarsProfile();
Promise.all([treeHouseProfile, codeWarsProfile])
  .then(response => {
    learningProfile("Treehouse", response[0])
    console.log("CodeWars", response[1])
  })
// Promise.all([treeHouseProfile])
  // .then(response => response.forEach(profile => {
    // learningProfile("Treehouse", profile)
    // console.log("CodeWars", )
  // })) 

const profileRowBuilder = (allRows) => {
  let html = "";
  const sortedRows = objectSorter(allRows);

  for (const [techName, pointValue] of Object.entries(sortedRows)) {
    if (pointValue !== 0 && techName !== "total") {
      html += 
        `
          <tr>
            <td>${techName}</td>
            <td>${pointValue}</td>
          </tr>
        `
    }
  }
  return html;
}

const learningProfile = (platformName, data) => {
  const profileDiv = document.getElementById(platformName.toLowerCase());
  let rowsHtml = profileRowBuilder(data.points)
  let tableHtml = 
  `
    <section>
      <h2>${platformName} Profile</h2>
      <div class="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Technology</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            ${rowsHtml}
          </tbody>
        </table>
      </div>
    </section>
  `;
  profileDiv.innerHTML = tableHtml
}

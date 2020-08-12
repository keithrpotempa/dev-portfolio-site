import apiManager from "./apiManager.js";

const treeHouseProfile = apiManager.getTreeHouseProfile();
// const codeWarsProfile = apiManager.getCodeWarsProfile();
Promise.all([treeHouseProfile])
  .then(response => response.forEach(profile => {
    socialProfile("Treehouse", profile)
  })) 

const profileRowBuilder = (allRows) => {
  let html;
  const sortedRows = {};
  Object.entries(allRows)
    .sort((a, b) => b[1] - a[1])
    .forEach(([key, val]) => {
      sortedRows[key] = val;
    });
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
    console.log(html)
  }
  return html;
}

const socialProfile = (platformName, data) => {
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
  console.log(tableHtml)
  profileDiv.innerHTML = tableHtml
}

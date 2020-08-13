import projects from "../builderData/projects.js"

const makeProjectHTML = (project, index) => {
  const {
    name,
    description,
    date,
    codeLink,
    liveLink,
    imgUrl,
    altText
   } = project;

  // Build the imageHTML now to place later
  const imageHTML = 
  `
  <div class="image">      
    <a href="${imgUrl}">
      <img 
        src="${imgUrl}" 
        alt="${altText}" 
        data-position="center center" 
        class="project"
      />
    </a>
  </div>
  `

  // Even indices have images on the left,
  // Odd appear on the right 
  return `
    <section>
      ${index % 2 === 0 ? imageHTML : ""}
      <div class="content">
        <div class="inner">
          <h2>${name}</h2>
          <p>${date}</p>
          <p>${description}</p>
          <ul class="actions">
            ${codeLink
              ? `<li>
                <a 
                  href="${codeLink}" 
                  class="button"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Code Repo
                </a>
              </li>`
              : ""
            }

            ${liveLink 
              ? `<li>
                  <a 
                    href="${liveLink}" 
                    class="button"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    See it Live
                  </a>
                </li>`
              : ""
            }

          </ul>
        </div>
      </div>
      ${index % 2 !== 0 ? imageHTML : ""}
    </section>
  `;
}

const makePortfolioHTML = (projects) => {
  const listDiv = document.getElementById("portfolio");
  projects.forEach((project, index) => listDiv.innerHTML += makeProjectHTML(project, index)) 
}

makePortfolioHTML(projects);
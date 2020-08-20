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
  <div class="col-1">
    <span class="image thumbnail fit">
      <a href="${imgUrl}">
        <img 
          src="${imgUrl}" 
          alt="${altText}" 
          data-position="center center" 
        />
      </a>
    </span>
  </div>
  `

  // Even indices have images on the left,
  // Odd appear on the right 
  return `
    <section>
      ${imageHTML}
      <div class="content">
        <div class="inner">
          <h3>${name}</h3>
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
    </section>
  `;
}

const makePortfolioHTML = (projects) => {
  const listDiv = document.getElementById("portfolio");
  projects.forEach((project, index) => listDiv.innerHTML += makeProjectHTML(project, index)) 
}

makePortfolioHTML(projects);
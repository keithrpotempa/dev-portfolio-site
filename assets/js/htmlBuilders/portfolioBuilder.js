import projects from "../builderData/projects.js"

const makeProjectHTML = (project) => {
  const {
    name,
    description,
    date,
    codeLink,
    liveLink,
    imgUrl,
    altText
   } = project;

  return `
    <section>
      <a href="${imgUrl}" class="image">
        <img 
          src="${imgUrl}" 
          alt="${altText}" 
          data-position="center center" 
        />
      </a>
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
    </section>
  `;
}

const makePortfolioHTML = (projects) => {
  const listDiv = document.getElementById("portfolio");
  projects.forEach(project => listDiv.innerHTML += makeProjectHTML(project)) 
}

makePortfolioHTML(projects);
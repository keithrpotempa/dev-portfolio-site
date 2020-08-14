import socials from "../builderData/socials.js";

const socialLinkBuilder = (socials) => {
  let html = "";
  
  socials.forEach(social => {
    const { label, clss, href } = social; 
    html += 
      `
        <li>
          <a 
            href="${href}" 
            class="${clss}"
            target="_blank"
            rel="noreferrer noopener"
          >
            <span class="label">${label}</span>
          </a>
        </li>
      `
  });

  return html;
}

const makeSocialLinks = (socials) => {
  const socialDivs = document.getElementsByClassName("socials")
  let socialLinks = socialLinkBuilder(socials)
  let socialHTML = 
    `
      <ul class="icons">
        ${socialLinks}
      </ul>
    `
  // Iterate over the HTML Collection socialDivs
  // and fill each div with the socialHTML
  for (let div of socialDivs) {
    div.innerHTML = socialHTML;
  }
};

makeSocialLinks(socials)
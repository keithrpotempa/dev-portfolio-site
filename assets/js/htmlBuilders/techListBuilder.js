import techList from "../builderData/techs.js"

const techBullet = (tech) => {
  const [name, iconClass, iconText, description, treehouse] = tech;

  return `
    <section>
      <span class="icon solid major">
        <i class="${iconClass}">${iconText}</i>
      </span>
      <h5>${name}</h5>
    </section>
  `
}

const makeList = (listName) => {
  const listDiv = document.getElementById(listName);

  for (const [key, value] of Object.entries(techList[listName])) {
    listDiv.innerHTML += techBullet([
      key,
      value.iconClass,
      value.iconText ? value.iconText: "",
      value.description ? value.description: "",
      value.treehouse ? treeHouseProfile.points[key] : ""
    ]);
  };

}

const makeTechLists = () => {
  makeList("frontEnd");
  makeList("styling");
  makeList("backEnd");
  makeList("platforms");
}

makeTechLists()
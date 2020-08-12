const techBullet = (tech) => {
  const [name, iconClass, iconText, description, treehouse] = tech;

  return `
    <section>
      <span class="icon solid major">
        <i class="${iconClass}">${iconText}</i>
      </span>
      <h3>${name}</h3>
      ${treehouse 
        ? `<p>Treehouse Points: ${treehouse.toLocaleString()}</p>`
        : ``
      }
      <p>${description}</p>
    </section>
  `
}

const techList = {
  "frontEnd": {
    "JavaScript": {
      iconClass: "fab fa-js-square",
    },
    "ReactJS": {
      iconClass: "fab fa-react",
    }, 
    "TypeScript": {
      iconClass: "", // TODO
      iconText: "TS",
    },
    "HTML": {
      iconClass: "fab fa-html5",
    },
    "CSS": {
      iconClass: "fab fa-css3-alt",
      // description: "Material UI, Semantic UI, Bootstrap",
    },
    "JSX": {
      iconClass: "",
      iconText: "JSX",
    },
    "npm": {
      iconClass: "fab fa-npm",
    },
    "Apollo": {
      iconClass: "", // TODO
      iconText: "Ap",
    },
  },
  "backEnd": {
    "Python": {
      iconClass: "fab fa-python",
    }, 
    "Django": {
      iconClass: "", // TODO
      iconText: "Dj",
    },
    "SQL": {
      iconClass: "", //TODO
      iconText: "SQL",
    },
    "REST API": {
      iconClass: "", // TODO
      iconText: "{ }",
    },
    "GraphQL": {
      iconClass: "", // TODO
      iconText: "GQL",
    },
    "Hasura": {
      iconClass: "", // TODO
      iconText: "Has",
    },
    "Docker": {
      iconClass: "fab fa-docker",
    },
    "AWS": {
      iconClass: "fab fa-aws",
    },
    // "Firebase": {
    //   iconClass: "",
    //   iconText: "Fb"
    // },
    "Windows Server": {
      iconClass: "fab fa-windows",
    }, 
    "Linux Server": {
      iconClass: "fab fa-ubuntu",
    }
  },
};

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
  makeList("backEnd");
}

makeTechLists()
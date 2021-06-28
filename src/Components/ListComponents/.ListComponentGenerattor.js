var v = require("voca");
const prettier = require("prettier");

const { LoadInitialLibraries } = require("./Services/LoadInitialLibraries");
const { LoadStateofComponent } = require("./Services/LoadStateofComponent");
const { LoadffectsOfComponent } = require("./Services/LoadffectsOfComponent");
const {
  LoadFuctionsRelatedToComponent
} = require("./Services/LoadFuctionsRelatedToComponent");
const { loadloadingcomponent, loadErrorcomponent } = require('../CommonParts/loadloadingcomponent')

const {
  LoadRenderFunctionData
} = require("./Services/Render/LoadRenderFunctionData");

const ListComponentGenerattor = (entity,serverLessType = null) => {
  const entityObject = {
    EntityNameUpperCase: v.upperCase(entity.name),
    EntityNameCamelCase: v.camelCase(entity.name),
    EntityNameTitleCase: v.titleCase(entity.name),
    entity
  };

  const data = `
      ${LoadInitialLibraries(entityObject)}
      export default function ${entityObject.EntityNameTitleCase}s() {
       
        ${LoadStateofComponent(entityObject)}
        ${LoadffectsOfComponent(entityObject)}
         ${LoadFuctionsRelatedToComponent(entityObject)}
          ${loadloadingcomponent()}
          ${loadErrorcomponent()}

        ${LoadRenderFunctionData(entityObject,serverLessType)}
      }
  `;

  return prettier.format(data);
};
module.exports = { ListComponentGenerattor };

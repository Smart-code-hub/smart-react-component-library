const prettier = require("prettier");
const {
  ListComponentGenerattor
} = require("./src/Components/ListComponents/.ListComponentGenerattor.js");

const {
  CreateComponentGenerator
} = require("./src/Components/CreateComponent/CreateComponentGenerator");

const {
  EditComponentGenerator
} = require("./src/Components/EditComponent/EditComponentGenerator");

const ProcessComponents = (entity,serverLessType = null) => {
  try {
    // we will generate all components here related to crud
    const listComponentContent = ListComponentGenerattor(entity,serverLessType);
    const createContent = CreateComponentGenerator(entity,serverLessType);
    const editContentt = EditComponentGenerator(entity,serverLessType);

    return [
      {
        data: prettier.format(listComponentContent),
        componentPath: `Components/${entity.name.toLowerCase()}/${entity.name.toLowerCase()}List.component.js`
      },
      {
        data: prettier.format(createContent),
        componentPath: `Components/${entity.name.toLowerCase()}/${entity.name.toLowerCase()}Create.component.js`
      },
      {
        data: prettier.format(editContentt),
        componentPath: `Components/${entity.name.toLowerCase()}/${entity.name.toLowerCase()}Edit.component.js`
      }
    ];
  } catch (error) {
    return { error };
  }
};

module.exports = {
  ProcessComponents
};

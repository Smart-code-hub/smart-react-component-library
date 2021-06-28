const LoadStateRelatedToCreateComponent = ({
  EntityNameTitleCase,
  EntityNameCamelCase,
  entity
}) => {
  const initialState = `{
       ${entity.properties.map(a => `${a.name}:''`).join()}
    }`;
  return `
  const [${EntityNameCamelCase}, set${EntityNameTitleCase}] = useState(${initialState});
  `;
};
module.exports = {
  LoadStateRelatedToCreateComponent
};

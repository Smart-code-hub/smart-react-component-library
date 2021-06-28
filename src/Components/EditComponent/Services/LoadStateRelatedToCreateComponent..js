const LoadStateRelatedToCreateComponent = ({
  EntityNameTitleCase,
  EntityNameCamelCase,
  entity
}) => {
  const initialStatte = `{
       ${entity.properties.map(a => `${a.name}:''`).join()}
    }`;
  return `
  const [${EntityNameCamelCase}, set${EntityNameTitleCase}] = useState(${initialStatte});
  `;
};
module.exports = {
  LoadStateRelatedToCreateComponent
};

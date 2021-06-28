const LoadEditModalGenerator = (EntityNameTitleCase, EntityNameCamelCase) => {
  return `  <Edit${EntityNameTitleCase}
  ${EntityNameCamelCase}db={selected${EntityNameTitleCase}}
  handleClose={() => {
    setShowEdit${EntityNameTitleCase}Modal(false);
  }}
  show={showEdit${EntityNameTitleCase}Modal}
></Edit${EntityNameTitleCase}>`;
};

module.exports = {
  LoadEditModalGenerator
};

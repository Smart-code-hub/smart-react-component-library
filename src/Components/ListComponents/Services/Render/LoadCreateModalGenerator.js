const LoadCreateModalGenerator = (EntityNameTitleCase, EntityNameCamelCase) => {
  return `        <Create${EntityNameTitleCase}
  handleClose={() => {
    setShowCreate${EntityNameTitleCase}Modal(false);
  }}
  show={showCreate${EntityNameTitleCase}Modal}
></Create${EntityNameTitleCase}>`;
};

module.exports = {
  LoadCreateModalGenerator
};

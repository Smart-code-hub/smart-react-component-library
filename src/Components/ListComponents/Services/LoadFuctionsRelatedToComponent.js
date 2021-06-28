const LoadFuctionsRelatedToComponent = ({
  EntityNameTitleCase,
  EntityNameCamelCase,
  EntityNameUpperCase,
  entity
}) => {



  return `
  const create${EntityNameTitleCase} = () => {
    setShowEdit${EntityNameTitleCase}Modal(false);
    setShowCreate${EntityNameTitleCase}Modal(!showCreate${EntityNameTitleCase}Modal);
  };
  const edit${EntityNameTitleCase} = item => {
    setSelected${EntityNameTitleCase}(item);
    setShowEdit${EntityNameTitleCase}Modal(!showEdit${EntityNameTitleCase}Modal);
    setShowCreate${EntityNameTitleCase}Modal(false);
  };

  const delete${EntityNameTitleCase} =  item => {
    dispatch({ type: ${EntityNameUpperCase}_REMOVE, payload: item._id});
  };
  
  
  const searchfilter = (e) => {
    set${EntityNameCamelCase}sToShow(
       ${EntityNameCamelCase}s.filter( ${EntityNameCamelCase} => {
        return ${filterPropertiescreator(EntityNameCamelCase, entity)}
      })
    );
  }
  
  
  `;
};



const filterPropertiescreator = (EntityNameCamelCase, entity) => {
  return entity.properties.filter(a=>!a.isImage && a.type !="Boolean").map(a => {
    return ` ${EntityNameCamelCase}.${a.name}.toLowerCase().includes(e.target.value.toLowerCase())`
  }).join(' || ')
}
module.exports = { LoadFuctionsRelatedToComponent };

const CreateFunctionGenerator = ({
  props,
  EntityNameTitleCase,
  EntityNameCamelCase,
  EntityNameUpperCase
},serverLessType = null) => {
  return `
      const On${EntityNameTitleCase}Edit = async () => {
         
          ${GetContentForpost(props, EntityNameCamelCase, EntityNameUpperCase,serverLessType)}
         
          handleClose();
          // console.log(${EntityNameCamelCase});
        };`;
};
const GetContentForpost = (props, EntityNameCamelCase, EntityNameUpperCase,serverLessType = null) => {
  const isImageExist = props.some(a => a.isImage);
  if (isImageExist && !serverLessType) {
    const fomData = props
      .map(a => {
        if (a.isImage) {
          return `
          if(Array.isArray(${EntityNameCamelCase}.${a.name} ))
          {
            
          }
          else{
            for (var pair of  ${EntityNameCamelCase}.${a.name}.entries()) {
              data.append(pair[0], pair[1]);
            }
          }
       
          
          `;
        }
        if(a.hasRelationShip){
           return `data.append('${a.name}', ${EntityNameCamelCase}.${a.name}.${a.ref.columnNameAsValue});`;
        }
        return `data.append('${a.name}', ${EntityNameCamelCase}.${a.name});`;
      })
      .join("");
    return `
        var data = new FormData();
       ${fomData}
       dispatch({ type: ${EntityNameUpperCase}_UPDATE, payload: {id:${EntityNameCamelCase}._id,data} });
         `;
  } else {
    return `
      
      dispatch({ type: ${EntityNameUpperCase}_UPDATE, payload: {id:${EntityNameCamelCase}._id,data:${EntityNameCamelCase}} });
      `;
  }
};

module.exports = { CreateFunctionGenerator };

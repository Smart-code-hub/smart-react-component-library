const CreateFunctionGenerator = ({
  props,
  EntityNameTitleCase,
  EntityNameCamelCase,
  EntityNameUpperCase
},serverLessType = null) => {
  return `
      const On${EntityNameTitleCase}Create = async () => {
         
          ${GetContentForpost(props, EntityNameCamelCase, EntityNameUpperCase,serverLessType)}
         
          handleClose();
         
        };`;
};
const GetContentForpost = (props, EntityNameCamelCase, EntityNameUpperCase,serverLessType = null) => {
  const isImageExist = props.some(a => a.isImage);
  if (isImageExist && !serverLessType) {
    const fomData = props
      .map(a => {
        if (a.isImage) {
          return `
          
          for (var pair of  ${EntityNameCamelCase}.${a.name}.entries()) {
            data.append(pair[0], pair[1]);
          }
          
          `;
        }
        return `data.append('${a.name}', ${EntityNameCamelCase}.${a.name});`;
      })
      .join("");
    return `
          var data = new FormData();
         ${fomData}
  
          
          dispatch({ type: ${EntityNameUpperCase}_ADD, payload: data });
          
          `;
  } 
  else {
    return `
    
    dispatch({ type: ${EntityNameUpperCase}_ADD, payload: ${EntityNameCamelCase} });
    `;
  }
};

module.exports = { CreateFunctionGenerator };

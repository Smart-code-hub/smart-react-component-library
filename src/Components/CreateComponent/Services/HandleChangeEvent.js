const HandleChangeEvent = (
  { entity, props, EntityNameCamelCase, EntityNameTitleCase },
  serverLessType = null
) => {
  const isImageExist = props.some((a) => a.isImage);
  const isbooleanExist = props.some((a) => a.type == "Boolean");

  const GnericChangeEventHandler = `const handleChange = event => {
    set${EntityNameTitleCase}({ ...${EntityNameCamelCase}, [event.target.name]: event.target.value });
  };
  `;
  const BooleanChangeEventHandler = () => {
    return isbooleanExist
      ? `
    const handlecheckEvent = event => {
      set${EntityNameTitleCase}({ ...${EntityNameCamelCase}, [event.target.name]: event.target.checked });

    };`
      : "";
  };

  const ImageChangeWithServerLess = () => {
    return isImageExist && serverLessType
      ? `
      const handleFileChange = event => {
        const files = [...event.target.files]

      set${EntityNameTitleCase}({ ...${EntityNameCamelCase}, [event.target.name]: files });
      };`
            : "";
  };

  const ImageChangeWithoutServerless = () => {
    return isImageExist && !serverLessType
      ? `
      const handleFileChange = event => {

      var formData = new FormData();
      for (let i = 0; i < event.target.files.length; i++) {
        formData.append(
                  event.target.name,
          event.target.files[i],
          event.target.files[i]["name"]
        );
      }


      set${EntityNameTitleCase}({ ...${EntityNameCamelCase}, [event.target.name]: formData });
      };`
            : "";
  };

  return `
      ${GnericChangeEventHandler}

      ${BooleanChangeEventHandler()}

      ${ImageChangeWithServerLess()}
      

      ${ImageChangeWithoutServerless()}`;
};
module.exports = { HandleChangeEvent };

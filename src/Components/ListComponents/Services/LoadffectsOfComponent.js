const LoadffectsOfComponent = ({
  EntityNameTitleCase,
  EntityNameCamelCase,
  EntityNameUpperCase
}) => {
  return `
  useEffect(async () => {
    // lets load our data for first time
    dispatch({ type: ${EntityNameUpperCase}_FETCH});
    return () => {};
  }, []);


  useEffect(() => {
    const ${EntityNameCamelCase}sToSlice = [...${EntityNameCamelCase}s];
    //1 0
    // 2 9
    set${EntityNameCamelCase}sToShow(${EntityNameCamelCase}sToSlice.splice((currentPage - 1) * pageSize, pageSize));
    return () => { };
  }, [currentPage, pageSize, ${EntityNameCamelCase}s]);
  `;
};
module.exports = {
  LoadffectsOfComponent
};

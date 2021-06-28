const V = require("voca");
const LoadffectsOfComponent = ({ props }) => {
  const data = props
    .filter(a => a.hasRelationShip)
    .map(a => {
      return ` dispatch({ type: ${V.upperCase(a.ref.entityName)}_FETCH});`;
    })
    .join(" ");
  return `

  useEffect( () => {

    ${data}
    return () => {};
  }, []);


  `;
};
module.exports = {
  LoadffectsOfComponent
};

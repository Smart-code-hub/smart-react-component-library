const { LoadInitialLibraries } = require("./Services/LoadInitialLibraries");
const { HandleChangeEvent } = require("./Services/HandleChangeEvent");
const {
  LoadStateRelatedToCreateComponent
} = require("./Services/LoadStateRelatedToCreateComponent.");
const { LoadffectsOfComponent } = require("./Services/LoadffectsOfComponent");
const { LoadRenderfunction } = require("./Services/Render/LoadRenderfunction");
const v = require("voca");
const {
  CreateFunctionGenerator
} = require("./Services/CreateFunctionGenerator");
const { loadloadingcomponent } = require("../CommonParts/loadloadingcomponent");

const EditComponentGenerator = (entity,serverLessType = null) => {
  const props = entity.properties.map(a => {
    return {
      name: a.name,
      type: a.type,
      isImage: a.isImage,
      hasRelationShip: a.hasRelationShip,
      ref: a.ref,
      isRichText: a.isRichText
    };
  });

  const entityObject = {
    EntityNameUpperCase: v.upperCase(entity.name),
    EntityNameCamelCase: v.camelCase(entity.name),
    EntityNameTitleCase: v.titleCase(entity.name),
    entity,
    props
  };
  const SelectorForRef = ({ ref, name }) => {
    return `const {${ref.entityName}s} = useSelector(state=>state.${ref.entityName}State)
    
    useEffect(() => {
      if (${ref.entityName}s && ${ref.entityName}s.length && ! ${entityObject.EntityNameCamelCase}.${name}) {
        ${entityObject.EntityNameCamelCase}.${name} = ${ref.entityName}s[0].${ref.columnNameAsValue};
      }
    }, []);
    `;
  };
  const GetRelations = props
    .filter(a => a.hasRelationShip)
    .map(a => {
      return SelectorForRef(a);
    })
    .join(" ");

  return `
  ${LoadInitialLibraries(entityObject)}
  export default function Edit${
    entityObject.EntityNameTitleCase
  }({ show, handleClose,${entityObject.EntityNameCamelCase}db }) {
  
 ${LoadStateRelatedToCreateComponent(entityObject)}

 ${GetRelations}
 
 const dispatch = useDispatch();

 ${LoadffectsOfComponent(entityObject)}

 useEffect(() => {
  ${entityObject.EntityNameCamelCase}db && set${
    entityObject.EntityNameTitleCase
  }(${entityObject.EntityNameCamelCase}db);
  return () => {};
}, [ ${entityObject.EntityNameCamelCase}db]);

 ${HandleChangeEvent(entityObject,serverLessType)}
 ${CreateFunctionGenerator(entityObject,serverLessType)}


 ${LoadRenderfunction(entityObject)}
}
  `;
};
module.exports = { EditComponentGenerator };

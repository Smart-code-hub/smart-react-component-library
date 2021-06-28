const TableBodygenerator = (
  EntityNameCamelCase,
  EntityNameTitleCase,
  entity,serverLessType = null
) => {
  const tableBodyData = entity.properties

    .map(a => {
      
      if (a.isImage) {
        const src = !serverLessType?
        `\`\${API_URL}\${${EntityNameCamelCase}.${a.name}[0]}\``:
        `${EntityNameCamelCase}.${a.name}[0].url`
        ;
        return `<td>
        <img style={{
          height: 150,
          width: 150,
          objectFit: "cover"
        }} className="img-thumbnail" src={${src}}/>
        </td>
        `;
      } else if (a.isRichText) {
        return `<td>Rich Text Preview</td>`;
      } else if (a.type == "Boolean") {
        return `<td>
        <Form.Check
        name="${a.name}"
        disabled={true}
        checked={${EntityNameCamelCase}.${a.name}}
        type="checkbox"
      />
        </td>`;
      } 
      else if(a.hasRelationShip) {
        return `<td>{${EntityNameCamelCase}.${a.ref.entityName}.${a.ref.columnNameToDisplay}}</td>
        `;
      }
      else {
        return `<td>{${EntityNameCamelCase}.${a.name}}</td>
        `;
      }
    })
    .join(" ");
  return `
    <tbody>
    {${EntityNameTitleCase}sToShow  && ${EntityNameTitleCase}sToShow.length >0 && (
      ${EntityNameTitleCase}sToShow.map((${EntityNameCamelCase}, index) => {
               
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      ${tableBodyData}
                      <td>
                        <div className="row">
                          <button onClick={() => edit${EntityNameTitleCase}(${EntityNameCamelCase})} className="btn btn-success m-1">
                            <i className="fa fa-pencil text-white"></i>
                          </button>
                          <button onClick={() => delete${EntityNameTitleCase}(${EntityNameCamelCase})} className="btn btn-danger m-1">
                            <i className="fa fa-trash text-white"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                }))}
              </tbody>`;
};

module.exports = { TableBodygenerator };

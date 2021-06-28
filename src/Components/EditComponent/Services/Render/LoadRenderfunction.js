const v = require("voca");

const LoadRenderfunction = ({
  props,
  EntityNameTitleCase,
  EntityNameCamelCase,
  EntityNameUpperCase
}) => {
  const formData = props
    .filter(a => !a.isRichText)
    .map((a, i) => {
      const val = !a.isImage ? `value={${EntityNameCamelCase}.${a.name}}` : ``;
      //insert form row
      let formField = "";
      //if Image
      if (a.isImage) {
        formField = ` <Form.Label>${v.titleCase(a.name)}</Form.Label>
        <Form.Control
          onChange={handleFileChange}
          name="${a.name}"
          type="file"

          multiple
          placeholder="Enter ${a.name}"
        />`;
      } else if (a.hasRelationShip) {
        formField = `  

  <Form.Group controlId="exampleForm.SelectCustom">
    <Form.Label>${v.titleCase(a.name)}</Form.Label>
    <Form.Control 
    name="${a.name}"
    id='${v.titleCase(a.name)}'
    label='${v.titleCase(a.name)}'
    onChange={handleChange}
    as="select" size="sm" custom>
     { ${a.ref.entityName}s && ${a.ref.entityName}s.length &&
      ${a.ref.entityName}s.map(${a.ref.entityName}=>{
        return <option
       value = {${a.ref.entityName}.${a.ref.columnNameAsValue}}
        >{${a.ref.entityName}.${a.ref.columnNameToDisplay}}</option>
      }) }
     
    </Form.Control>
  </Form.Group>

        `;
      } else if (a.type == "Date") {
        formField = ` <Form.Label>${v.titleCase(a.name)}</Form.Label>
        <Form.Control
          onChange={handleChange}
          name="${a.name}"
          value={${EntityNameCamelCase}.${a.name}}
          type="date"
      
        />`;
      } else if (a.type == "Boolean") {
        formField = `  <Form.Check 
           name="${a.name}"
           custom
           className="mt-4"
          onChange={handlecheckEvent}
          checked={${EntityNameCamelCase}.${a.name}}
          type="checkbox"
          id='${v.titleCase(a.name)}'
          label='${v.titleCase(a.name)}'
          />`;
      } else {
        formField = ` <Form.Label>${v.titleCase(a.name)}</Form.Label>
          <Form.Control
            onChange={handleChange}
            name="${a.name}"
            value={${EntityNameCamelCase}.${a.name}}
            type="text"
            placeholder="Enter ${a.name}"
          />`;
      }

      return `
    ${i % 2 == 0 ? "<Form.Row> " : ""}  

    <Form.Group as={Col} controlId="formGridEmail">
      ${formField}
    </Form.Group>

    ${i % 2 != 0 ? "</Form.Row> " : ""}
    `;
    })
    .join(" ");
  // console.log(fornData);
  const richTextData = props
    .filter(a => a.isRichText)
    .map((a, i) => {
      const val = `data={${EntityNameCamelCase}.${a.name}}`;

      //insert form row
      let formField = `
      
      <Form.Label>${v.titleCase(a.name)}</Form.Label>

              <CKEditor
                editor={ClassicEditor}
            
               ${val}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  set${EntityNameTitleCase}({ ...${EntityNameCamelCase}, ${
        a.name
      }: data });
                }}
              />`;

      return `
   <Form.Row>

    <Form.Group as={Col} xs="12" >
      ${formField}
    </Form.Group>
    </Form.Row>
    `;
    })
    .join(" ");
  return `
  return (
    <Modal show={show} size="lg" onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit ${EntityNameTitleCase}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
         <Form>
           ${formData}
           ${
             props.filter(a => !a.isRichText).length % 2 != 0
               ? `</Form.Row>`
               : ""
           }
           ${richTextData}
        </Form>
       
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={On${EntityNameTitleCase}Edit}>
          Edit
        </Button>
      </Modal.Footer>
    </Modal>
  );`;
};
module.exports = { LoadRenderfunction };

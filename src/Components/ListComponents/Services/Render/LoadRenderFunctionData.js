const {
  createNewEntityButtonCreator
} = require("./createNewEntityButtonCreator");

const { TableHeaderGenerator } = require("./TableHeaderGenerator");
const { TableBodygenerator } = require("./TableBodygenerator");
const { LoadCreateModalGenerator } = require("./LoadCreateModalGenerator");
const { LoadEditModalGenerator } = require("./LoadEditModalGenerator");

const LoadRenderFunctionData = ({
  EntityNameTitleCase,
  EntityNameCamelCase,
  EntityNameUpperCase,
  entity
},serverLessType = null) => {
  console.log(serverLessType);
  
  return `
  return (
    <>
     ${createNewEntityButtonCreator(EntityNameTitleCase, EntityNameCamelCase)}
     <div className="col-lg-10 col-sm-12 col-md-10 p-3 card shadow-sm border-0">
    
      <Table responsive borderless hover>
      ${TableHeaderGenerator(entity)}
      ${TableBodygenerator(EntityNameCamelCase, EntityNameTitleCase, entity,serverLessType)}
      </Table>
    
      {${EntityNameCamelCase}s && ${EntityNameCamelCase}s.length >0 && <TablePagination
        activePage={currentPage}
        noOfPages={Math.round(${EntityNameCamelCase}s.length / pageSize)}
        onPageChange={setCurrentPage}
      ></TablePagination>}



        ${LoadCreateModalGenerator(EntityNameTitleCase, EntityNameCamelCase)}
        ${LoadEditModalGenerator(EntityNameTitleCase, EntityNameCamelCase)}

       
      </div>
    </>
  );
    `;
};

module.exports = { LoadRenderFunctionData };

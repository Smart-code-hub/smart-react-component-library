const createNewEntityButtonCreator = (
  EntityNameTitleCase,
  EntityNameCamelCase
) => ` 
    
  

  <div class="row col-10 p-3">
  <div class="col-lg-6 col-md-6 col-sm-12  mb-2">
  <button class="btn col-lg-6 col-md-6 col-sm-12 btn-dark float-left mx-auto" onClick={create${EntityNameTitleCase}}>Create ${EntityNameTitleCase}</button>
  </div>
  <div class="col-lg-6 col-md-6 col-sm-12 mb-2">
  <input type="text"   onChange={searchfilter}
  placeholder='search  ${EntityNameTitleCase}' class=" float-right col-lg-6 col-md-6 col-sm-12 form-control mx-auto mr-0" />
  </div>
  </div>
    
    `;

module.exports = { createNewEntityButtonCreator };

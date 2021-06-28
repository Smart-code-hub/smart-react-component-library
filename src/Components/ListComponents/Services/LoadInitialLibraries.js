const LoadInitialLibraries = ({
  EntityNameTitleCase,
  EntityNameCamelCase,
  EntityNameUpperCase
}) => {
  return `

  import React, { useEffect, useState } from "react";
  import Create${EntityNameTitleCase} from "./${EntityNameCamelCase}Create.component";
  import Edit${EntityNameTitleCase} from "./${EntityNameCamelCase}Edit.component";
  import { useSelector, useDispatch } from "react-redux";
  import { LoadingComponent } from "../Shared/LoadingComponent";
  import { ErrorComponent } from "../Shared/ErrorComponent";
import { API_URL } from "../../constants";
  
  import { Table ,Form} from "react-bootstrap";
  import TablePagination from "../Shared/DataTable/Pagination";

import { ${EntityNameUpperCase}_FETCH,${EntityNameUpperCase}_REMOVE } from "../../State/Actions/${EntityNameCamelCase}Actions";`;
};

module.exports = {
  LoadInitialLibraries
};

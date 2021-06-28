const V = require("voca");

const LoadInitialLibraries = ({
  EntityNameTitleCase,
  EntityNameCamelCase,
  EntityNameUpperCase,
  props
}) => {
  const refFetch = props
    .filter(a => a.hasRelationShip)
    .map(a => {
      return `import { ${V.upperCase(
        a.ref.entityName
      )}_FETCH } from "../../State/Actions/${V.camelCase(
        a.ref.entityName
      )}Actions";`;
    })
    .join(" ");
  return `
      import React, { useState, useEffect } from "react";
  import { Modal, Button, Form, Col } from "react-bootstrap";
  import {
    Edit${EntityNameTitleCase}Record,
    Fetch${EntityNameTitleCase}s
  } from "../../Services/${EntityNameTitleCase}/${EntityNameCamelCase}Service";
  import { ${EntityNameUpperCase}_UPDATE } from "../../State/Actions/${EntityNameCamelCase}Actions";
  import { useDispatch ,useSelector } from "react-redux";
import { LoadingComponent,ErrorComponent } from "../Shared/LoadingComponent";

import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
  ${refFetch}
  `;
};
module.exports = { LoadInitialLibraries };

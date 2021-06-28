var v = require("voca");

const TableHeaderGenerator = entity => {
  const thData = entity.properties
    .map(
      a => `<th>${v.titleCase(a.name)}</th>
      `
    )
    .join(" ");
  return `
        <thead>
        <tr>
        
          <th>#</th>
           ${thData}
          <th></th>
        </tr>
      </thead>`;
};

module.exports = {
  TableHeaderGenerator
};

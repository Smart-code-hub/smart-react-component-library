const LoadStateofComponent = ({
  EntityNameTitleCase,
  EntityNameCamelCase,
  EntityNameUpperCase
}) => {
  return `
  const { ${EntityNameCamelCase}s ,loading,error } = useSelector(state => state.${EntityNameCamelCase}State);
  const dispatch = useDispatch();
  const [showCreate${EntityNameTitleCase}Modal, setShowCreate${EntityNameTitleCase}Modal] = useState(false);
  const [showEdit${EntityNameTitleCase}Modal, setShowEdit${EntityNameTitleCase}Modal] = useState(false);
  const [selected${EntityNameTitleCase}, setSelected${EntityNameTitleCase}] = useState();

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(3);
  const [${EntityNameTitleCase}sToShow, set${EntityNameCamelCase}sToShow] = useState([]);

  `;
};
module.exports = {
  LoadStateofComponent
};



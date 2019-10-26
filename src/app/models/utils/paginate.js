const handlePaginate = async (Model, options, page, pageSize) => {
  const limit = pageSize;
  const offset = (page - 1) * pageSize;
  const docs = await Model.findAndCountAll({
    ...options,
    limit,
    offset,
  });
  return {
    count: docs.count,
    pages: Math.ceil(docs.count / pageSize),
    rows: docs.rows,
  };
};

export default handlePaginate;

class SequelizePaginate {
  async paginate(model, options, page, pageSize) {
    page = parseInt(page, 10);
    pageSize = parseInt(pageSize, 10);
    const offset = (page - 1) * pageSize;
    const docs = await model.findAndCountAll({
      ...options,
      limit: pageSize,
      offset,
    });
    const totalPages = Math.ceil(docs.count / pageSize);
    return {
      content: docs.rows,
      empty: !(docs.rows.length > 0),
      first: page === 1,
      last: page === totalPages,
      pageable: {
        pageNumber: page,
        pageSize,
        offset,
      },
      numberOfElements: docs.rows.length,
      totalPages,
      totalElements: docs.count,
    };
  }
}
export default new SequelizePaginate();

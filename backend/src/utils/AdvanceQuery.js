class AdvancedQuery {
  constructor(model, queryString) {
    this.model = model;
    this.queryString = queryString;
    this.mongoQuery = {};
    this.query = this.model.find(); // default query
    this.pagination = {};
  }

  // 1️⃣ Filtering
  filter() {
    const queryObj = { ...this.queryString };
    const excluded = ['page', 'sort', 'limit', 'fields', 'search'];
    excluded.forEach((el) => delete queryObj[el]);

    for (let key in queryObj) {
      if (key.includes('[')) {
        const field = key.split('[')[0];
        const operator = key.match(/\[(.*)\]/)[1];

        if (!this.mongoQuery[field]) {
          this.mongoQuery[field] = {};
        }

        this.mongoQuery[field][`$${operator}`] = Number(queryObj[key]);
      } else {
        this.mongoQuery[key] = queryObj[key];
      }
    }

    this.query = this.model.find(this.mongoQuery);

    return this;
  }

  // 2️⃣ Search (Merged into mongoQuery)
  search(field) {
    if (this.queryString.search) {
      this.mongoQuery[field] = {
        $regex: this.queryString.search,
        $options: 'i',
      };

      this.query = this.model.find(this.mongoQuery);
    }

    return this;
  }

  // 3️⃣ Sorting
  sort() {
    const sortBy = this.queryString.sort
      ? this.queryString.sort.split(',').join(' ')
      : '-createdAt';

    this.query = this.query.sort(sortBy);

    return this;
  }

  // 4️⃣ Field Limiting
  limitFields() {
    const fields = this.queryString.fields
      ? this.queryString.fields.split(',').join(' ')
      : '-__v';

    this.query = this.query.select(fields);

    return this;
  }

  // 5️⃣ Pagination
  async paginate() {
    const page = Math.max(1, Number(this.queryString.page) || 1);
    const limit = Math.max(1, Number(this.queryString.limit) || 10);
    const skip = (page - 1) * limit;

    const total = await this.model.countDocuments(this.mongoQuery);

    if (page * limit < total) {
      this.pagination.next = { page: page + 1, limit };
    }

    if (page > 1) {
      this.pagination.prev = { page: page - 1, limit };
    }

    this.pagination.total = total;
    this.query = this.query.skip(skip).limit(limit);

    return this;
  }
}

export default AdvancedQuery;

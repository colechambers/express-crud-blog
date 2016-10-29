if (process.env.NODE_ENV === 'development') {
  require('dotenv').load()
}


module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/express_blog',
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + '?ssl=true',
  },
};

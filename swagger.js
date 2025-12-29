// swagger.js
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express'

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Swagger Express API',
      version: '1.0.0',
      description: 'A simple Express API with Swagger documentation',
    },
  },
  apis: [
    './routes/users/usersIndex.js',
    './routes/v1/moviesList/moviesListIndex.js'
  ], // Path to your API routes
};

const specs = swaggerJSDoc(options);

export {
  specs,
  swaggerUi,
};
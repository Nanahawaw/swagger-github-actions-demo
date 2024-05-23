import swaggerAutogen from 'swagger-autogen';

const doc = {
    info: {
        title: 'Swagger Autogen Demo',
        description: 'API documentation',
    },
    host: 'localhost:3000',
    schemes: ['http'],
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./server/routes/example.js'];

swaggerAutogen()(outputFile, endpointsFiles, doc).then(async () => {
    await import('./index.js'); // Your project's main file
});

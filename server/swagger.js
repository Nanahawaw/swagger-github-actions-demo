import swaggerAutogen from 'swagger-autogen';

const doc = {
    info: {
        title: 'Swagger Autogen Demo',
        description: 'API documentation',
    },
    host: 'localhost:3000',
    schemes: ['http'],
};

const outputFile = './swagger-output.json';  // Ensure this path is correct
const endpointsFiles = ['./server/routes/example.js'];

swaggerAutogen()(outputFile, endpointsFiles, doc).then(async () => {
    console.log('Swagger documentation generated successfully');
    await import('./index.js'); // Your project's main file
}).catch((err) => {
    console.error('Error generating Swagger documentation:', err);
});

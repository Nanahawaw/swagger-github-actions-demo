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


swaggerAutogen()(outputFile, endpointsFiles, doc).then(() => {
    console.log('Swagger documentation generated successfully');
    process.exit(0); // Exit the process to avoid hanging in GitHub Actions
}).catch((err) => {
    console.error('Error generating Swagger documentation:', err);
    process.exit(1); // Exit with an error code if Swagger generation fails
});

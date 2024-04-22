require('dotenv').config()

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const routes = require('./routes/index');
const db = require('../config/database');

const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const Sentry = require('@sentry/node');

Sentry.init(
    {
        dsn: process.env.DNS,
        tracesSampleRate: 1.0
    }
);

app.use(Sentry.Handlers.requestHandler());
app.use(Sentry.Handlers.errorHandler());

const swaggerOptioins = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Univer API",
            description: "Univer API Information",
            contact: {
                name: "Anatoli Prishchepov"
            },
            servers: [`http://localhost:${port}/`],
            version: "1.0.0"
        },
        basePath: '/',
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'apiKey',
                    in: 'header',
                    name: 'Authorization',
                    description: "",
                }
            }
        },
    },
    apis: ["./src/routes/*.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptioins);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

db.authenticate()
    .then(() => console.log('DB connected!'))
    .catch((err) => console.log('error connect DB ------>>>', err));

app.use(express.json());
app.use('/', routes);

app.listen(port, () => console.log('Server started on port: ' + port));
console.log('Hello developer');
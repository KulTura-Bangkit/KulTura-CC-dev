const Joi = require('joi');
const {
    postRegisterUsersHandler,
    postLoginUsersHandler,
    postLogoutUsersHandler,
    
    getFoodMethodHandler,
    getFoodsDetailMethodHandler,
    getBatikMethodHandler,
    getBatiksDetailMethodHandler,
    getBuildMethodHandler,
    getBuildsDetailMethodHandler,
    
    
} = require('./handler');

const routes = [
    {
        method: 'POST',
        path: '/register',
        // config: { auth: 'jwt' },
        handler: postRegisterUsersHandler,
        options: {
            validate: {
                payload: Joi.object({
                email: Joi.string().email().required(),
                username: Joi.string().required(),
                password: Joi.string().required(),
                nim: Joi.string().required(),
            }),
            },
        },
    },
    {
        method: 'POST',
        path: '/login',
        // config: { auth: 'jwt' },
        handler: postLoginUsersHandler,
        options: {
            validate: {
                payload: Joi.object({
                username: Joi.string().required(),
                password: Joi.string().required(),
            }),
            },
        },
    },
    {
        method: 'POST',
        path: '/logout',
        handler: postLogoutUsersHandler,
    },
    {
        method: 'GET',
        path: '/foods',
        // config: { auth: 'jwt' },
        handler: getFoodMethodHandler,
    },
    {
        method: 'GET',
        path: '/foods/{id}',
        // config: { auth: 'jwt' },
        handler: getFoodsDetailMethodHandler,
    },

    {
        method: 'GET',
        path: '/batiks',
        // config: { auth: 'jwt' },
        handler: getBatikMethodHandler,
    },
    {
        method: 'GET',
        path: '/batiks/{id}',
        // config: { auth: 'jwt' },
        handler: getBatiksDetailMethodHandler,
    },

    {
        method: 'GET',
        path: '/builds',
        // config: { auth: 'jwt' },
        handler: getBuildMethodHandler,
    },
    {
        method: 'GET',
        path: '/builds/{id}',
        // config: { auth: 'jwt' },
        handler: getBuildsDetailMethodHandler,
    },
];

module.exports = routes;
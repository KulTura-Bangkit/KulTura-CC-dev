const Joi = require('joi');
const {
    signInHandler,
    postRegisterUsersHandler,
    postLoginUsersHandler,
    postLogoutUsersHandler,

    getFoodMethodHandler,
    get5FoodMethodHandler,
    getFoodsDetailMethodHandler,
    getBatikMethodHandler,
    get5BatikMethodHandler,
    getBatiksDetailMethodHandler,
    get5BuildMethodHandler,
    getBuildMethodHandler,
    getBuildsDetailMethodHandler,
    getSearchAllData,
    
    
} = require('./handler');

const routes = [
    {
        method: 'POST',
        path: '/signin',
        handler: signInHandler,
    },
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
                nik: Joi.string().required(),
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
        path: '/foods/first',
        // config: { auth: 'jwt' },
        handler: get5FoodMethodHandler,
    },
    {
        method: 'GET',
        path: '/foods/{name}',
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
        path: '/batiks/first',
        // config: { auth: 'jwt' },
        handler: get5BatikMethodHandler,
    },
    {
        method: 'GET',
        path: '/batiks/{name}',
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
        path: '/builds/first',
        // config: { auth: 'jwt' },
        handler: get5BuildMethodHandler,
    },
    {
        method: 'GET',
        path: '/builds/{name}',
        // config: { auth: 'jwt' },
        handler: getBuildsDetailMethodHandler,
    },
    {
        method: 'GET',
        path: '/all/{name}',
        // config: { auth: 'jwt' },
        handler: getSearchAllData,
    },

];

module.exports = routes;
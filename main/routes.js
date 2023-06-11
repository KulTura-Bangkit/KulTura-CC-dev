const {
    // postMethodHandler,
    postRegisterUsersHandler,
    postLoginUsersHandler,
    getFoodMethodHandler,
    getFoodsDetailMethodHandler,
    getBatikMethodHandler,
    getBatiksDetailMethodHandler,
    getBuildMethodHandler,
    getBuildsDetailMethodHandler,
    
    // putMethodHandler,
    // deleteMethodHandler,
    
} = require('./handler');

const routes = [
    // {
    //   method: 'POST',
    //   path: '/foods',
    //   config: { auth: 'jwt' },
    //   handler: postMethodHandler,
    // },
    {
        method: 'POST',
        path: '/register',
        // config: { auth: 'jwt' },
        handler: postRegisterUsersHandler,
    },
    {
        method: 'POST',
        path: '/login',
        // config: { auth: 'jwt' },
        handler: postLoginUsersHandler,
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
    // {
    //   method: 'PUT',
    //   path: '/foods/{id}',
    //   config: { auth: 'jwt' },
    //   handler: putMethodHandler,
    // },
    // {
    //   method: 'DELETE',
    //   path: '/foods/{id}',
    //   config: { auth: 'jwt' },
    //   handler: deleteMethodHandler,
    // },
];

module.exports = routes;
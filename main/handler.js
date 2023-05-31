const foods = require('./food');
const batiks = require('./batik');
const builds = require('./build');

// GET ALL food
const getFoodMethodHandler = (request, h) => {
    const foodTemp = Array.isArray(foods) ? foods : []; // Ensure foodTemp is an array
    const { name } = request.query;

    if (name !== undefined) {
        const food = foodTemp.filter((food) =>
        food.name.toLowerCase().includes(name.toLowerCase())
    );

    const response = h.response({
        status: 'success',
        data: {
        foods: food.map((food) => ({
            id: food.id,
            name: food.name,
            description: food.description,
        })),
        },
    });
    
    response.code(200);
    return response;
    }

    const response = h.response({
        status: 'success',
        data: {
        foods: foodTemp.map((food) => ({
            id: food.id,
            name: food.name,
            description: food.description,
        })),
    },
    });
    console.log(foods);
    response.code(200);
    return response;
};

  // GET DETAIL food
const getFoodsDetailMethodHandler = (request, h) => {
const { id } = request.params;

    const food = foods.filter((foodTemp) => foodTemp.id === id)[0];
    if (food !== undefined) {
        return {
        status: 'success',
        data: {
        food,
        },
    };
}
    const response = h.response({
        status: 'fail',
        message: 'data tidak ditemukan',
    });
    response.code(404);
    return response;
};

// GET ALL batik
const getBatikMethodHandler = (request, h) => {
    const batikTemp = batiks;
    const { name } = request.query;

    if (name !== undefined) {
        const batik = batiks.filter(
        (batik) => batik.name.toLowerCase().includes(name.toLowerCase()),
    );

    const response = h.response({
        status: 'success',
        data: {
        foods: batik.map((batik) => ({
            id: batik.id,
            name: batik.name,
            description: batik.description,
            })),
        },
    });

    response.code(200);
    return response;
    }

    const response = h.response({
        status: 'success',
        data: {
        foods: batikTemp.map((batik) => ({
            id: batik.id,
            name: batik.name,
            description: batik.description,
        })),
    },
    });
    response.code(200);
    return response;
};

  // GET DETAIL batik
const getBatiksDetailMethodHandler = (request, h) => {
const { id } = request.params;

    const batik = batiks.filter((batikTemp) => batikTemp.id === id)[0];
    if (batik !== undefined) {
        return {
        status: 'success',
        data: {
        batik,
        },
    };
}
    const response = h.response({
        status: 'fail',
        message: 'data tidak ditemukan',
    });
    response.code(404);
    return response;
};

// GET ALL build
const getBuildMethodHandler = (request, h) => {
    const buildTemp = builds;
    const { name } = request.query;

    if (name !== undefined) {
        const build = builds.filter(
        (build) => build.name.toLowerCase().includes(name.toLowerCase()),
    );

    const response = h.response({
        status: 'success',
        data: {
        builds: build.map((build) => ({
            id: build.id,
            name: build.name,
            description: build.description,
            })),
        },
    });

    response.code(200);
    return response;
    }

    const response = h.response({
        status: 'success',
        data: {
        builds: buildTemp.map((build) => ({
            id: build.id,
            name: build.name,
            description: build.description,
        })),
    },
    });
    response.code(200);
    return response;
};

  // GET DETAIL build
const getBuildsDetailMethodHandler = (request, h) => {
const { id } = request.params;

    const build = builds.filter((buildTemp) => buildTemp.id === id)[0];
    if (build !== undefined) {
        return {
        status: 'success',
        data: {
        build,
        },
    };
}
    const response = h.response({
        status: 'fail',
        message: 'data tidak ditemukan',
    });
    response.code(404);
    return response;
};

module.exports = {
    // postMethodHandler,

    getFoodMethodHandler,
    getFoodsDetailMethodHandler,
    getBatikMethodHandler,
    getBatiksDetailMethodHandler,
    getBuildMethodHandler,
    getBuildsDetailMethodHandler,
    
    // putMethodHandler,
    // deleteMethodHandler,
};
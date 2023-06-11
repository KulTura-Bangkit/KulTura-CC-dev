const foods = require('./food');
const batiks = require('./batik');
const builds = require('./build');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { Pool } = require('pg');

//Konfigurasi Database Postgresql
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'kultura1',
    password: 'reza123!',
    port: 5432,
});

// POST Register Users
const postRegisterUsersHandler = async (request, h) => {
    const { email, username, password, nik } = request.payload;

  // Cek apakah pengguna sudah terdaftar
  const query = 'SELECT * FROM users WHERE username = $1 OR email = $2 OR nik = $3';
    const result = await pool.query(query, [username, email, nim]);
    if (result.rows.length > 0) {
    return h.response('User already exists').code(400);
}

  // Hash password
const hashedPassword = await bcrypt.hash(password, 10);

  // Simpan pengguna ke database
const insertQuery = 'INSERT INTO users (email, username, password, nik) VALUES ($1, $2, $3, $4)';
await pool.query(insertQuery, [email, username, hashedPassword, nik]);

return h.response('User registered successfully').code(201);
};

// POST Login Users
const postLoginUsersHandler = async (request, h) => {
    const { username, password } = request.payload;

  // Cek apakah pengguna terdaftar
  const query = 'SELECT * FROM users WHERE username = $1';
    const result = await pool.query(query, [username]);
    const user = result.rows[0];

    if (!user) {
    return h.response('Invalid username or password').code(401);
}

  // Verifikasi password
const isValidPassword = await bcrypt.compare(password, user.password);
if (!isValidPassword) {
    return h.response('Invalid username or password').code(401);
}

  // Buat token JWT
const token = jwt.sign({ username: user.username }, 'secretkey', { expiresIn: '1h' });

return { token };
};

// POST Logout Users
const postLogoutUsersHandler = (request, h) => {
    // Anda dapat mengatur opsi konfigurasi untuk menghapus token dari sisi klien,
    // misalnya, dengan mengatur cookie atau menghapus token dari local storage.
    // Pada contoh ini, kita menganggap token disimpan dalam Authorization header.

    // Menghapus header Authorization
    const response = h.response('Logout successful');
    response.header('Authorization', '');
    return response;
};

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

    postRegisterUsersHandler,
    postLoginUsersHandler,
    postLogoutUsersHandler,

    getFoodMethodHandler,
    getFoodsDetailMethodHandler,
    getBatikMethodHandler,
    getBatiksDetailMethodHandler,
    getBuildMethodHandler,
    getBuildsDetailMethodHandler,
};
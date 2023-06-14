const foods = require('./food');
const batiks = require('./batik');
const builds = require('./build');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { Pool } = require('pg');
const admin = require('firebase-admin');
require('dotenv').config();

//Konfigurasi Database Postgresql
const pool = new Pool({
    user: process.env.USER || 'postgres',
    host: process.env.HOST || 'localhost',
    database: process.env.DATABASE || 'kultura1',
    password: process.env.PASSWORD || 'reza123!',
    port: process.env.PORT_DB || '5432',
});

// Sign In Firebase
const serviceAccount = require('../serviceAccountKey.json');
admin.initializeApp({
credential: admin.credential.cert(serviceAccount),
});

const signInHandler = async (request, h) => {
    const { idToken } = request.payload;

try {
    // Verifikasi token akses menggunakan Firebase Admin SDK
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    const { email, name, picture } = decodedToken;

    // Lakukan operasi yang diperlukan dengan informasi pengguna yang berhasil sign-in
    // Contoh: menyimpan pengguna ke basis data, menghasilkan token JWT, dll.

    return h.response({ message: 'Sign-in successful', user: { email, name, picture } }).code(200);
} catch (error) {
    console.error('Error during sign-in:', error);
    return h.response({ message: 'Sign-in error' }).code(500);
}
};

// // Fungsi untuk menghasilkan token akses menggunakan Firebase Admin SDK
// const generateFirebaseAccessToken = async () => {
//     try {
//       // Dapatkan token akses dari Firebase Admin SDK
//       const token = await admin.app().auth().createCustomToken('user-uid');
  
//       return token;
//     } catch (error) {
//       console.error('Error generating Firebase access token:', error);
//       throw error;
//     }
//   };
  
//   // Contoh penggunaan untuk menghasilkan token akses
//   generateFirebaseAccessToken()
//     .then((token) => {
//       console.log('Firebase access token:', token);
//       // Gunakan token akses dalam request Postman
//     })
//     .catch((error) => {
//       console.error('Error generating Firebase access token:', error);
//     });

// POST Register Users
const postRegisterUsersHandler = async (request, h) => {
    const { email, username, password, nik } = request.payload;

  // Cek apakah pengguna sudah terdaftar
  const query = 'SELECT * FROM users WHERE username = $1 OR email = $2 OR nik = $3';
    const result = await pool.query(query, [username, email, nik]);
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
            url_image: food.url_image,
            url_product: food.url_product,
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
            url_image: food.url_image,
            url_product: food.url_product,
        })),
    },
    });
    console.log(foods);
    response.code(200);
    return response;
};

  // GET DETAIL food
const getFoodsDetailMethodHandler = (request, h) => {
const { name } = request.params;

    const food = foods.filter((foodTemp) => foodTemp.name.toLowerCase().replace(/ /g, "") === name.toLowerCase().replace(/ /g, ""))[0];
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

// GET 5 Data Pertama Food
const get5FoodMethodHandler = (request, h) => {
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
                    url_image: food.url_image,
                    url_product: food.url_product,
                })),
            },
        });

        response.code(200);
        return response;
    }

    const response = h.response({
        status: 'success',
        data: {
            foods: foodTemp.slice(0, 5).map((food) => ({
                id: food.id,
                name: food.name,
                description: food.description,
                url_image: food.url_image,
                url_product: food.url_product,
            })),
        },
    });

    response.code(200);
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
            url_image: batik.url_image,
            url_product: batik.url_product,
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
            url_image: batik.url_image,
            url_product: batik.url_product,
        })),
    },
    });
    response.code(200);
    return response;
};
// GET 5 Data Pertama Food
const get5BatikMethodHandler = (request, h) => {
    const batikTemp = Array.isArray(batiks) ? batiks : []; // Ensure foodTemp is an array
    const { name } = request.query;

    if (name !== undefined) {
        const batik = batikTemp.filter((batik) =>
            batik.name.toLowerCase().includes(name.toLowerCase())
        );

        const response = h.response({
            status: 'success',
            data: {
                batiks: batik.map((batik) => ({
                    id: batik.id,
                    name: batik.name,
                    description: batik.description,
                    url_image: batik.url_image,
                    url_product: batik.url_product,
                })),
            },
        });

        response.code(200);
        return response;
    }

    const response = h.response({
        status: 'success',
        data: {
            batiks: batikTemp.slice(0, 5).map((batik) => ({
                id: batik.id,
                name: batik.name,
                description: batik.description,
                url_image: batik.url_image,
                url_product: batik.url_product,
            })),
        },
    });

    response.code(200);
    return response;
};

  // GET DETAIL batik
const getBatiksDetailMethodHandler = (request, h) => {
const { name } = request.params;

    const batik = batiks.filter((batikTemp) => batikTemp.name.toLowerCase().replace(/ /g, "") === name.toLowerCase().replace(/ /g, ""))[0];
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
            url_image: build.url_image,
            url_product: build.url_product,
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
            url_image: build.url_image,
            url_product: build.url_product,
        })),
    },
    });
    response.code(200);
    return response;
};
// GET 5 Data Pertama Food
const get5BuildMethodHandler = (request, h) => {
    const buildTemp = Array.isArray(builds) ? builds : []; // Ensure foodTemp is an array
    const { name } = request.query;

    if (name !== undefined) {
        const build = buildTemp.filter((build) =>
            build.name.toLowerCase().includes(name.toLowerCase())
        );

        const response = h.response({
            status: 'success',
            data: {
                builds: build.map((build) => ({
                    id: build.id,
                    name: build.name,
                    description: build.description,
                    url_image: build.url_image,
                    url_product: build.url_product,
                })),
            },
        });

        response.code(200);
        return response;
    }

    const response = h.response({
        status: 'success',
        data: {
            builds: buildTemp.slice(0, 5).map((build) => ({
                id: build.id,
                name: build.name,
                description: build.description,
                url_image: build.url_image,
                url_product: build.url_product,
            })),
        },
    });

    response.code(200);
    return response;
};

  // GET DETAIL build
const getBuildsDetailMethodHandler = (request, h) => {
const { name } = request.params;

    const build = builds.filter((buildTemp) => buildTemp.name.toLowerCase().replace(/ /g, "") === name.toLowerCase().replace(/ /g, ""))[0];
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

//GET Search All Data
const getSearchAllData =(request, h) => {
    const { name } = request.params;

    const food = foods.filter((foodTemp) => foodTemp.name.toLowerCase().replace(/ /g, "") === name.toLowerCase().replace(/ /g, ""))[0];
    const batik = batiks.filter((batikTemp) => batikTemp.name.toLowerCase().replace(/ /g, "") === name.toLowerCase().replace(/ /g, ""))[0];
    const build = builds.filter((buildTemp) => buildTemp.name.toLowerCase().replace(/ /g, "") === name.toLowerCase().replace(/ /g, ""))[0];
    const hasil = []

    if (food) {
        hasil.push(food);
    }
    if (batik) {
        hasil.push(batik);
    }
    if (build) {
        hasil.push(build);
    }

    if (hasil.length > 0) {
        return {
            'data': hasil
        }
    };
    
    const response = h.response({
        status: 'fail',
        message: 'data tidak ditemukan',
    });
    response.code(404);
    return response;
};

module.exports = {

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
    getBuildMethodHandler,
    get5BuildMethodHandler,
    getBuildsDetailMethodHandler,

    getSearchAllData,
};
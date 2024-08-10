const BASE_URL = 'http://localhost:8080/',
USERS = `${BASE_URL}auth`, 
LOGIN = `${BASE_URL}auth/login`,
REGISTER = `${BASE_URL}auth/register`,
ROLES=`${BASE_URL}roles`, 
USERS_REGISTER = `${BASE_URL}auth/register`,
USERS_STORE=`${BASE_URL}auth`,
PERMISOS = `${BASE_URL}permisos`,
DEPORTES = `${BASE_URL}deportes`,
EQUIPOS = `${BASE_URL}equipos`,
VITAL_SIGNS = `${BASE_URL}vital-signs`,
WEARABLES = `${BASE_URL}wearables`,
TORNEOS = `${BASE_URL}torneos`,
TORNEOS_SHOW = `${TORNEOS}/show`

export {
    USERS,
    ROLES,
    PERMISOS,
    DEPORTES,
    USERS_STORE,
    USERS_REGISTER,
    EQUIPOS,
    VITAL_SIGNS,
    WEARABLES,
    LOGIN,
    REGISTER,
    TORNEOS,
    TORNEOS_SHOW
} 

export default BASE_URL
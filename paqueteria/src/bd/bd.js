export const users = {
    joselin: ['jose', 'diaz', 'password1234'],
    matorres: ['maria', 'torres', 'password4321'],
    reyiel123: ['daniel', 'reyes', 'claveoculta'],
    cejbin: ['yorbin', 'cejaz', 'ocultaclave'],
};


export function addUser(username, userData) {
    if (!users.hasOwnProperty(username)) {
        users[username] = userData;
        return true; // usuario creado
    } else {
        return false; // usuario existente
    }
}

/*const newUser = {
    name: 'Nuevo',
    lastName: 'Usuario',
    password: 'nuevaclave'
};

const username = 'nuevoUsuario';

if (addUser(username, [newUser.name, newUser.lastName, newUser.password])) {
    console.log(`Usuario '${username}' agregado exitosamente.`);
} else {
    console.log(`El usuario '${username}' ya existe.`);
}*/
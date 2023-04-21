import { getUser, getUsuarioActivo } from '../../src/base-pruebas/05-funciones';

describe('Pruebas en 05-funciones', () => {

    test('getUser debe de retornar un objeto', () => { 
        
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();
        console.log(user);

        // expect( testUser).toEqual( user );
        expect( testUser).toStrictEqual( user );

        
    });

    test('getUsuarioActivo debe de retornar un objeto', () => {


        //Creamos una variable donde introduciremos el nombre del usuario
        const name = 'Fernando';

        //Creamos una constante para recoger el valor devuelto por la funciona y le pasamos el valor de la constante name
        const usuarioActivo = getUsuarioActivo(name);

        //Realizamos la comprobacion de que los valores sean los mismos
        expect( usuarioActivo ).toStrictEqual({
            uid: 'ABC567',
            username: name
        });

    })

});
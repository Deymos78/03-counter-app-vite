import { usContext } from '../../src/base-pruebas/06-deses-obj';


describe('Pruebas en 06-deses-obj', () => { 

    test('usContext debe retornar un objeto', () => {

        // nombreClave: clave,
        // anios: edad,
        // latlng: {
        //     lat: 14.1232,
        //     lng: -12.3232
        // }

        const clave = 56; 
        const edad = 22;
         
        const user = usContext({clave, edad});

        expect( user ).toStrictEqual({
            nombreClave: clave,
            anios: edad,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        });

    });


})
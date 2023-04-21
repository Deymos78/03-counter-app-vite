import { getHeroeById, getHeroesByOwner } from '../../src/base-pruebas/08-imp-exp';
import heroes from '../../src/data/heroes';


describe('Pruebas en 08-imp-exp', () => {
     
    test('getHeroeById debe retornar un heroe por ID', () => {
         
        const  id = 1;

        const hero = getHeroeById( id );

        expect( hero ).toEqual({ id: 1, name: 'Batman', owner: 'DC' });

        // console.log( hero );
         
    });


    test('getHeroeById debe retornar undefine si no existe ', () => {
         
        const  id = 160;

        const hero = getHeroeById( id );

        // expect( hero ).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
        expect(hero).toBeFalsy();
        // console.log( hero );
         
    });


    // Tarea:
    // Debe retornar un arreglo con los heroes de DC
    // Length === 3
    // toEqual al arreglo filtrado

    // debe retornar un arreglo con los heroes de Marvel
    // length === 2


    test('getHeroesByOwner debe retornar un arreglo con heroes de DC ', () => {
         
        const  owner = 'DC';

        const hero = getHeroesByOwner( owner );

        // expect( hero ).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
        // expect(heroes).toBeFalsy();
        console.log( hero );

        expect( hero.length ).toEqual(3);
        expect( hero).toEqual([
                { id: 1, name: 'Batman', owner: 'DC' },
                { id: 3, name: 'Superman', owner: 'DC' },
                { id: 4, name: 'Flash', owner: 'DC' }
        
            ]);
            
        expect( hero ).toEqual( heroes.filter( (heroe) => heroe.owner === owner ));            
        

    });

    test('getHeroesByOwner debe retornar un arreglo con heroes de Marvel ', () => {
         
        const  owner = 'Marvel';

        const hero = getHeroesByOwner( owner );

        // expect( hero ).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
        // expect(heroes).toBeFalsy();
        console.log( hero );

        expect( hero.length ).toEqual(2);

        expect( hero ).toEqual( heroes.filter((heroe) => heroe.owner === owner)); 
        

    });



    
})
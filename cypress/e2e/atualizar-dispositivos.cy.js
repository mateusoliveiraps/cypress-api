/// <reference types="cypress" />

describe('Atualizar dados de dispositivo', () => {

    it('Atualizar dados de dispositivo por id', () => {
        cy.request({
            method: 'PUT',
            url:'https://api.restful-api.dev/objects/ff8081818dfdd992018e10f558a91171',
            body:{
                "name": "Apple Mateus",
                "data": {
                   "year": 2023,
                   "price": 2049.99,
                   "CPU model": "Intel Core i9",
                   "Hard disk size": "1 TB",
                   "color": "silver"
                }
             }
         })
         .then((resultado) => {
        
             expect(resultado.body.name).to.equal('Apple Mateus');
             expect(resultado.status).to.equal(200);
             expect(resultado.status).to.exist;      
         });
    });

    it('Atualizar dispositivos por id inválido', () => {
        cy.request({
           method: 'PUT',
           url:'https://api.restful-api.dev/objects/ff8081',
           failOnStatusCode: false,
           body:{
            "name": "Apple Mateus",
            "data": {
               "year": 2023,
               "price": 2049.99,
               "CPU model": "Intel Core i9",
               "Hard disk size": "1 TB",
               "color": "silver"
            }
         }
     })
        .then((response) => {
            expect(response.status).to.equal(404);
            expect(response.status).to.exist;
            expect(response.body.error.includes("The Object with id = ff8081818dfdd99 doesn't exist.")).to.be.false;  
        
        });
     
    });
  });
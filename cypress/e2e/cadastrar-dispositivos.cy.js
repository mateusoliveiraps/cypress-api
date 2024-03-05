/// <reference types="cypress"/>

describe('Cadastrar dispositivo', () => {

    it('Cadastrar dispositivo', () => {
        cy.request({
            method: 'POST',
            url: 'https://api.restful-api.dev/objects',
            body: {
                "name": "Apple 17 PRO",
                "data": {
                   "year": 2025,
                   "price": 10849.99,
                   "CPU model": "Intel Core i9",
                   "Hard disk size": "1 TB"
                }
            }
        })
        .then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.name).to.eq("Apple 17 PRO")
        })        
    })
})
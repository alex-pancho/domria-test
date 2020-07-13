
describe('Rooms and Prices filter tests', () => {
    it('Previous filter setting', () => {

       cy.visit('https://dom.ria.com/ru/search/#&page=0')
       //cy.get('.web-push-on').click()
       cy.get('.item-pseudoselect').click()
       cy.get('.options > #catType_1_2_1').click()
       cy.get('#boxPanelHead > :nth-child(2) > .mr-10 > label').click()
       cy.get('#boxPanelHead > :nth-child(3) > .checkbox').click()
       cy.get('#autocompleteSearch').type("Винница, Винницкая область")

    })
    it('Rooms filter add', () => {
        // перевірка, що при додавані фільтрів к-сть варіантів зростє
        cy.get('[for="rooms_count_1"]').click()
        cy.wait(3*1000)
        cy.get('.load').invoke('text').then((text1) => {
            cy.get('[for="rooms_count_2"]').click()
            cy.wait(3*1000)
            cy.get('.load').invoke('text').should((text2) => {
                text1 = text1.replace(/\s/g, '');
                text2 = text2.replace(/\s/g, '');
                expect(Number(text1)).to.be.lessThan(Number(text2))
              })
            
        })

        cy.get('[for="rooms_count_3"]').click()
        cy.wait(3*1000)
        cy.get('.load').invoke('text').then((text1) => {
            cy.get('[for="rooms_count_4"]').click()
            cy.wait(3*1000)
            cy.get('.load').invoke('text').should((text2) => {
                text1 = text1.replace(/\s/g, '');
                text2 = text2.replace(/\s/g, '');
                expect(Number(text1)).to.be.lessThan(Number(text2))
              })
            
        }) 
     })
    it('Rooms filter less', () => {
        // перевірка, що при знятті фільтрів к-сть варіантів меншає
        cy.get('[for="rooms_count_1"]').click()
        cy.wait(3*1000)
        cy.get('.load').invoke('text').then((text1) => {
            cy.get('[for="rooms_count_2"]').click()
            cy.wait(3*1000)
            cy.get('.load').invoke('text').should((text2) => {
                text1 = text1.replace(/\s/g, '');
                text2 = text2.replace(/\s/g, '');
                expect(Number(text1)).to.be.greaterThan(Number(text2))
              })
            
        })

        cy.get('[for="rooms_count_3"]').click()
        cy.wait(3*1000)
        cy.get('.load').invoke('text').then((text1) => {
            cy.get('[for="rooms_count_4"]').click()
            cy.wait(3*1000)
            cy.get('.load').invoke('text').should((text2) => {
                text1 = text1.replace(/\s/g, '');
                text2 = text2.replace(/\s/g, '');
                expect(Number(text1)).to.be.greaterThan(Number(text2))
              })
            
        }) 
     })

    it('Price from to', () => {
        // перевірка фільтру цін
        cy.get('#characteristic_234_from').type("20000")
        cy.get('#characteristic_234_to')
        cy.wait(3*1000)
        cy.get('.load').invoke('text').then((text1) => {
            cy.get('#characteristic_234_to').type("60000")
            cy.get('#characteristic_234_from')
            cy.wait(3*1000)
            cy.get('.load').invoke('text').should((text2) => {
                text1 = text1.replace(/\s/g, '');
                text2 = text2.replace(/\s/g, '');
                expect(Number(text1)).to.be.greaterThan(Number(text2))
              })
        })

     })
  })
describe('Пользователь заходит на страницу со списком статей', () => {
    beforeEach(() => {
        cy.login().then((data) => {
            cy.visit('articles');
        });
    });
    it('и статьи успешно подгружаются', () => {
        cy.getByTestId('ArticleList').should('exist');
        cy.getByTestId('ArticleListItem.IT').should('have.length.greaterThan', 3);
    });
    it('и ищет статью по поиску', () => {
        cy.getByTestId('ArticlesSearchInput').type('typescript');
        cy.getByTestId('ArticleListItem.IT').should('exist');
    });
    it('и фильтрует статьи', () => {
        cy.getByTestId('ArticlesTypeTabs.ECONOMICS').click();
        cy.getByTestId('ArticleListItem.ECONOMICS').should('exist');
    });
});

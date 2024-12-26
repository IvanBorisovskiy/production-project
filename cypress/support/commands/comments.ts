export const addComment = (text: string) => {
    cy.getByTestId('CommentFormInput').type(text);
    cy.getByTestId('CommentFormButton').click();
};

declare global {
    namespace Cypress {
        interface Chainable {
            addComment(text: string): Chainable<void>;
        }
    }
}

/**
 * Play a notification sound.
 */
Cypress.Commands.add('playSound', () => {
	cy.readFile('src/assets/notification.mp3', 'base64').then((sound) => {
		const audio = new Audio(`data:audio/mp3;base64,${sound}`)
		audio.play()
	})
})



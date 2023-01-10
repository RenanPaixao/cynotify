Cypress.Commands.add('notify', () => {
	cy.readFile('node_modules/cynotify/src/assets/notification.mp3', 'base64').then((sound) => {
		const audio = new Audio(`data:audio/mp3;base64,${sound}`)
		audio.play()
	})
})



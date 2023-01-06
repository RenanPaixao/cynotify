function play(){
	cy.readFile('src/assets/notification.mp3', 'base64').then((sound) => {
		const audio = new Audio(`data:audio/mp3;base64,${sound}`)
		audio.play()
	})
}

/**
 * Plays a sound whenever the run is done and add a command to play this song in everywhere.
 * @param {{stop: boolean}} options
 * @param {boolean} [options.stop=false] - Whether to stop the sound playing when a test fails.
 *
*/
export default function({ stop = false } = {}){
	if(!stop){
		after(() => play())
	}
	
	Cypress.Commands.add('playSound', ({ stop = false } = {}) => {
		if(!stop){
			play()
		}
	})
}


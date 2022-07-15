const { Listener } = require('@eartharoid/dbf');

module.exports = class extends Listener {
	constructor(client) {
		super(client, {
			emitter: client,
			event: 'ready',
			id: 'clientReady',
			once: true,
		});
	}

	run() {
		process.title = this.client.user.tag + ' [Discord Tickets]';
		this.client.log.success('Connected to Discord as "%s"', this.client.user.tag);
	}
};

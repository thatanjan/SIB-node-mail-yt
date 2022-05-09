const Sib = require('sib-api-v3-sdk')

require('dotenv').config()

const client = Sib.ApiClient.instance

const apiKey = client.authentications['api-key']
apiKey.apiKey = process.env.API_KEY

const sender = {
	email: 'thatanjan@gmail.com',
	// name: 'Anjan Shomodder',
}

const recivers = [
	{
		email: 'cules.coding@gmail.com',
	},
]

const transactionalEmailApi = new Sib.TransactionalEmailsApi()

transactionalEmailApi
	.sendTransacEmail({
		subject: 'Subscribe to Cules Coding to become a developer',
		sender,
		to: recivers,
		// textContent: `Cules Coding will teach you how to become a {{params.role}} developer.`,
		htmlContent: `
			<h1>Become a {{params.role}} developer</h1>
			<a href='https://cules-coding.vercel.app/'>Cules Coding</a>
		`,
		params: {
			role: 'frontend',
		},
	})
	.then(console.log)
	.catch(console.log)
// .then(
// 	function (data) {
// 		console.log(data)
// 	},
// 	function (error) {
// 		console.error(error)
// 	}
// )

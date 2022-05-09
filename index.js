const SibApiV3Sdk = require('sib-api-v3-sdk')
const defaultClient = SibApiV3Sdk.ApiClient.instance

require('dotenv').config()

const apiKey = defaultClient.authentications['api-key']
apiKey.apiKey = process.env.API_KEY

const sender = {
	email: 'thatanjan@gmail.com',
}

const recivers = [
	{
		email: 'cules.coding@gmail.com',
	},
]

const transactionalEmailApi = new SibApiV3Sdk.TransactionalEmailsApi()

transactionalEmailApi
	.sendTransacEmail({
		subject: 'Interested in applying to Frontend Developer',
		sender,
		to: recivers,
		textContent: `I would like to apply to be a Frontend Developer. Please contact me.`,
		templateId: 2,
		params: {
			contact: { FIRSTNAME: 'Anjan' },
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

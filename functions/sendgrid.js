const client = require('@sendgrid/mail')
const SENDGRID_API_KEY = process.env.SENDGRID

exports.handler = async function (event, context, callback) {
  const { message, senderEmail, senderName } = JSON.parse(event.body)
  client.setApiKey(SENDGRID_API_KEY)

  const data = {
    to: 'bruno132mg98@gmail.com',
    from: 'bruno132mg98@gmail.com',
    subject: `New message from ${senderName} (${senderEmail})`,
    html: message,
  }

  try {
    await client.send(data)
    return {
      statusCode: 200,
      body: 'Message sent',
    }
  } catch (err) {
    return {
      statusCode: err.code,
      body: JSON.stringify({ msg: err.message }),
    }
  }
}

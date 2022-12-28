import twilio from "twilio";

export default async function sendWhatsapp(message, target) {
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const client = twilio(accountSid, authToken);
    
    const opts = { 
        body: message,
        from: `whatsapp:+14155238886`,
        to: `whatsapp:${target}` 
    }

    client.messages
      .create(opts)
      .then(message => console.log(message.sid))
      .catch(console.error)
}
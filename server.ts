// Set your secret key. Remember to switch to your live secret key in production.
// See your keys here: https://dashboard.stripe.com/apikeys

import Stripe from 'stripe'
import express from 'express'

const app = express()

app.use(express.static('public'))
app.use(express.json())

// オーダの金額を計算するコードを書く
const calculateOrderAmount = (items: Items) => {
  const amount = items
  // ここで計算する処理を書く
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return 1400
}

type Items = {
  id: string[]
}

type ItemsBody = {
  items: Items
}

interface CustomRequest<T> extends express.Request {
  body: T
}

app.post('/create-payment-intent', async (req: CustomRequest<ItemsBody>, res: express.Response) => {
  const { items }: ItemsBody = req.body

  // Create a PaymentIntent with the order amount and currency
  const stripe = new Stripe(process.env.STRIPE_SECRET_API_KEY as string, { apiVersion: '2020-08-27' })
  const paymentIntent: Stripe.PaymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: 'usd',
  })

  res.send({
    clientSecret: paymentIntent.client_secret,
  })
})

app.listen(4242, () => {
  console.log('Running on port 4242')
})

import React, { useState, useEffect } from "react";
// stripeのコンポーネントを読み込んでる
import {
  PaymentElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";

import { PaymentIntentResult } from '@stripe/stripe-js'


// import { CardElementType } from './types/stripe'

export default function CheckoutForm() {
  // 第一配列がデフォルトの値, 第二配列がそれを変更する関数が入る

  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState<string | undefined | null>(null);
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    if (!stripe) {
      return;
    }

    //URLのクエリから値を取得する
    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    // リダイレクト時にここに値が入る
    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret)
      .then(({ paymentIntent, error }: PaymentIntentResult) => {
        if (!paymentIntent) return;
        switch (paymentIntent?.status) {
          case "succeeded":
            setMessage("Payment succeeded!");
            break;
          case "processing":
            setMessage("Your payment is processing.");
            break;
          case "canceled":
            setMessage("Your payment is canceled.");
            break;
          case "requires_payment_method":
            setMessage("You need to add your payment method.");
            break;
          case "requires_confirmation":
            setMessage("You need to confirm the payment.");
            break;
          case "requires_action":
            setMessage(`You need to complete next action: ${JSON.stringify(paymentIntent.next_action, null, 2)}`)
            break;
          default: {
            /**
             * productionでは、errorはSentryなどに送信し、
             * ユーザーへは「読み込みに失敗しました、サポートにお問い合わせください」のような
             * メッセージにしたほうが親切です。
             * が、練習・動作確認時点では、エラーメッセージをすぐ読める方が楽かなと思います。
             */
            if (error) {
              setMessage(`${error.code}: ${error.message}`)
            } else {
              setMessage(`The payment status is ${paymentIntent.status}`);
            }
            break;
          }
        }
      });
  }, [stripe]);

  /**
   * formタグのonSubmitイベントに設定する関数には、
   * この型が使えます。
   */
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: "http://localhost:8080",
      },
    });

    /**
     * ３Dセキュア認証のエラーや不正検知などでエラーになる場合もあります。
     * そのため、広くエラーメッセージを拾うことをおすすめします。
     * @see https://stripe.com/docs/testing#regulatory-cards
     */
    if (error.message) {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occured.");
    }

    setIsLoading(false);
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <PaymentElement id="payment-element" />
      <button disabled={isLoading || !stripe || !elements} id="submit">
        <span id="button-text">
          {isLoading ? <div className="spinner" id="spinner"></div> : "Pay now"}
        </span>
      </button>
      {/* Show any error or success messages */}
      {message && <div id="payment-message">{message}</div>}
    </form>
  );
}

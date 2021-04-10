import {useEffect, useState} from 'react';

const Checkout = ({ priceId, text, classNames, cancelUrl }) => {
  const [stripe, setStripe] = useState(null);
  useEffect(
    () =>
      setStripe(window.Stripe(process.env.NEXT_PUBLIC_STRIPE_PK, { stripeAccount: 'acct_1IedUYL4te1d25v7' } )),
    []
  );
  const goToCheckout = async () => {
    console.log(process.env.NEXT_PUBLIC_BASE_API_URL)
    const checkoutSession = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API_URL}/stripe/checkout-connect`,
      {
        method: 'POST',
        body: JSON.stringify({ priceId, cancelUrl }),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
    const session = await checkoutSession.json();
    stripe
      .redirectToCheckout({
        sessionId: session.id
      })
      .then(result => {
        console.log(result.error.message);
      });
  };

  return (
    <button
      onClick={goToCheckout}
      className={`btn-primary ${classNames}`}
      type="button"
    >
      {text}
    </button>
  );
};

export default Checkout;

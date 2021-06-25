export const sendEnquiryForm = async ({ firstName, lastName, email, message }) => {
  if (firstName === '' || lastName === '' || email === '' || message === '') {
    return false;
  }
  try {
    console.log(firstName, lastName, email, message);
    const body = {
      storeId: process.env.NEXT_PUBLIC_STORE_ID,
      payload: {
        firstName,
        lastName,
        email,
        message,
      },
    };
    const request = new Request(process.env.NEXT_PUBLIC_BASE_API_URL + '/email', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-type': 'application/json;charset=UTF-8',
      },
    });
    const response = await fetch(request);
    return response.ok;
  } catch (e) {
    return false;
  }
};

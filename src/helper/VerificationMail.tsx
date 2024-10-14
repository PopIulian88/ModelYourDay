const serviceId = process.env.EXPO_PUBLIC_EMAIL_SERVICE_ID;
const templateId = process.env.EXPO_PUBLIC_EMAIL_TEMPLATE_ID;
const userId = process.env.EXPO_PUBLIC_EMAIL_PUBLIC_KEY;
const emailJs = process.env.EXPO_PUBLIC_EMAIL_JS;

export const sendVerificationMail = async ({
  email,
  code,
}: {
  email: string;
  code: string;
}) => {
  const templateParams = {
    email,
    body: code,
  };

  const data = {
    service_id: serviceId,
    template_id: templateId,
    user_id: userId,
    template_params: templateParams,
  };

  // console.log(data);

  await fetch(emailJs ?? "", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then(() => console.log(`Sent security code: ${code} with success`))
    .catch(console.log);
};

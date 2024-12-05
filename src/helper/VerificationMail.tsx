import {
  emailJs,
  emailPublicKey,
  emailServiceId,
  emailTemplateId,
} from "../resources";

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
    service_id: emailServiceId,
    template_id: emailTemplateId,
    user_id: emailPublicKey,
    template_params: emailJs,
  };

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

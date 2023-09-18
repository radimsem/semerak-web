import Offer from "@/models/Offer";

export function prepareEmail(offer: Offer) {
  const { client, email, message } = offer;

  const subject = `Nová poptávka z webu od ${client}`;
  const text = `Jméno: ${client}
                Email: ${email}
                Popis projektu ${message}`

  return { subject, text };
}
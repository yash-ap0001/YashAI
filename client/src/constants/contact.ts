const WHATSAPP_NUMBER = "918805745948";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi Kamya Prasad, I would like to connect with YashAI (hr@yashaitech.com)."
);

export const CONTACT = {
  name: "Kamya Prasad",
  email: "hr@yashaitech.com",
  phoneDisplay: "+91 88057 45948",
  whatsappUrl: `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`,
} as const;

export const COMPANY = {
  legalName: "YashAI Technologies Private Limited",
  cin: "U62090TS2025PTC197645",
  address: "H No. 5-81/34E/33S, P No. 33/Part, Durga Nagar, Kistareddypet, Patancheru, Medak – 502319, Telangana, India",
} as const;

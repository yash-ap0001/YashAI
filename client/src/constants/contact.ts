const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi Kamya Prasad, I would like to connect with YashAI (hr@yashaitech.com)."
);

export const CONTACT = {
  name: "Kamya Prasad",
  email: "hr@yashaitech.com",
  whatsappUrl: `https://wa.me/?text=${WHATSAPP_MESSAGE}`,
} as const;

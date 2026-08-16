# YashAI inbound voice agent

When someone dials the company number, this agent answers, talks, and can send them to Kamya on WhatsApp.

The website on Vercel cannot pick up phone calls. You need a phone number + a hosted voice platform.

## Fastest setup (about 20 minutes)

You do **not** need GST for this. Pay Twilio/Vapi with a card.

### 1. Create a Vapi account

Open [https://dashboard.vapi.ai](https://dashboard.vapi.ai) and sign up.

### 2. Create the assistant

1. Assistants → Create
2. Name: `YashAI Inbound Receptionist`
3. First message:

   `Hello, you've reached YashAI. This is the virtual receptionist. How can I help you today?`

4. Paste the full text from `system-prompt.txt` into the system prompt
5. Voice: ElevenLabs (any clear female English voice)
6. Transcriber: Deepgram nova-2, language English
7. Publish

### 3. Get a number that forwards into Vapi

**For testing (do this first):**
- In Vapi: Phone Numbers → Buy a US number (Twilio is attached for you)
- Assign that number to `YashAI Inbound Receptionist`
- Call the number from your mobile. It should answer as YashAI.

**For Indian callers later:**
- Indian DIDs need KYC (and often a local company). GST is not the blocker; TRAI/KYC is.
- Options: buy an India number on Exotel / Knowlarity / MyOperator and SIP-forward into Vapi, or keep a US/international number on the website until KYC is done.

Do **not** point Kamya’s personal WhatsApp (`+91 88057 45948`) as the inbound PSTN line. That is her chat number. The voice agent needs its **own** DID.

### 4. Put the new number on the website

After the test call works, send me the new DID. I will add it on yashaitech.com next to Kamya’s WhatsApp.

## What the agent does

- Picks up inbound calls 24/7
- Explains YashAI services at a high level
- Takes name, company, callback number
- Points people to Kamya Prasad / hr@yashaitech.com / WhatsApp

## Cost (typical)

- Number: ~$1–2 / month (US)
- Voice agent: roughly $0.10–0.20 per minute (Vapi + voice + LLM)
- No GSTIN required to start

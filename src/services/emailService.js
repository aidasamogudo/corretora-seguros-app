import emailjs from '@emailjs/browser';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export async function enviarEmail({ nome, email, telefone, assunto, mensagem }) {
  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    throw new Error('Configuração de e-mail em falta (verifique o ficheiro .env)');
  }

  return emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    {
      nome,
      email: email || 'Não informado',
      telefone: telefone || 'Não informado',
      from_name: nome,
      from_email: email || 'Não informado',
      from_telefone: telefone || 'Não informado',
      assunto,
      mensagem,
      current_date: new Date().toLocaleString('pt-PT'),
      reply_to: email || 'premium@premiumcorretoraseguros.com'
    },
    { publicKey: PUBLIC_KEY }
  );
}

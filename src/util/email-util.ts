// eslint-disable-next-line import/prefer-default-export
export async function sendEmail(data: {
  honeypot: string;
  email: string;
  subject: string;
  message: string;
}) {
  return fetch('/api/contact', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
}

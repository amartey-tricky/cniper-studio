export const EmailTemplate = ({ first_name }: { first_name: string }) => {
  return (
    <div>
      <h1>Hi {first_name}</h1>
      <p>Thank you for contacting Cniper Studio. We will revert back to you soon.</p>
      <p>Best regards</p>
    </div>
  );
};
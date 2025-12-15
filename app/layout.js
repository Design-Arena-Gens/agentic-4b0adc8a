export const metadata = {
  title: 'Futuristic Profile',
  description: 'Personal profile with futuristic design',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

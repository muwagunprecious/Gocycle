export const metadata = {
  title: "Gocycle - Shopping Cart",
  description: "Your shopping cart application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

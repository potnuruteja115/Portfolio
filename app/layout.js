import "./globals.css";

const grotesk = { variable: "--font-grotesk" };
const inter = { variable: "--font-inter" };
const mono = { variable: "--font-mono" };

export const metadata = {
  title: "Potnuru Teja — Data Analyst",
  description:
    "Portfolio of Potnuru Teja — Data Science undergraduate skilled in Python, SQL, EDA, and data visualization. Open to Data Analyst / Data Science internships.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body bg-ink text-paper transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}


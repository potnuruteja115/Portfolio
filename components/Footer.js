export default function Footer() {
  return (
    <footer className="border-t border-token px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 font-mono text-xs text-muted-token sm:flex-row">
        <p>© {new Date().getFullYear()} Potnuru Teja. Built with Next.js &amp; Tailwind.</p>
        <p>Visakhapatnam, India</p>
      </div>
    </footer>
  );
}


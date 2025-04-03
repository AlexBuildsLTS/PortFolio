export default function Footer() {
  return (
    <footer className="py-6 text-center text-[var(--slate)]">
      <p>Designed & Built by Alex Youssef</p>
      <p className="text-sm mt-2">
        © {new Date().getFullYear()} All rights reserved.
      </p>
    </footer>
  );
}

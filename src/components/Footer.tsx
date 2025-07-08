export default function Footer() {
  return (
    <footer className="py-6 text-center text-text">
      <p>Designed & Built by Alex Youssef</p>
      <p className="mt-2 text-sm">
        © {new Date().getFullYear()} All rights reserved.
      </p>
    </footer>
  );
}

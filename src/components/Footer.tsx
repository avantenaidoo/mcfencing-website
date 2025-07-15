export default function Footer() {
  return (
    <footer
      className="text-sm py-4 border-t flex justify-between items-center px-6"
      style={{
        backgroundColor: 'var(--background)',
        color: 'var(--foreground)',
        borderColor: 'rgba(23, 23, 23, 0.1)', // subtle border, adjust if needed
      }}
    >
      <div>
        &copy; {new Date().getFullYear()} Designed and developed by{' '}
        <a
          href="https://www.barrydeanitsolutions.co.za/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: 'var(--foreground)',
            textDecoration: 'underline',
          }}
          className="hover:text-blue-500 transition-colors duration-300"
        >
          Barry-Dean IT Solutions
        </a>
      </div>
      <div className="italic">V1.0.3</div>
    </footer>
  );
}

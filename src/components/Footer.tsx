export default function Footer() {
  return (
    <footer
      className="text-sm py-4 border-t flex justify-between items-center px-6"
      style={{
        backgroundColor: "var(--background)",
        color: "var(--foreground)",
        borderColor: "#E3E8F0", 
      }}
    >
      <div>
        &copy; {new Date().getFullYear()} Designed and developed by{" "}
        <a
          href="https://www.barrydeanitsolutions.co.za/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "var(--primary)",
            textDecoration: "underline",
          }}
          className="hover:text-[var(--accent)] transition-colors duration-300"
        >
          Barry-Dean IT Solutions
        </a>
      </div>
      <div className="italic text-muted" style={{ color: "var(--text-muted)" }}>
        V1.0.5
      </div>
    </footer>
  );
}
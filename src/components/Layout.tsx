import { Navbar } from "./Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <footer className="m-1 bottom-0">
        © {new Date().getFullYear()}, Built by{" "}
        <a href="https://twitter.com/MoritzW42/">Moritz</a>
      </footer>
    </>
  );
}

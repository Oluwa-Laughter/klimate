import type { PropsWithChildren } from "react";
import Header from "@/components/Header";

function Layout({ children }: PropsWithChildren) {
  return (
    <div className="bg-gradient-to-br from-background to-muted">
      <Header />
      <main className="min-h-screen container mx-auto px-4 py-8">
        {children}
      </main>

      <footer className="border-t backdrop-blur py-12 supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>
            Made with{" "}
            <span aria-label="love" role="img">
              ❤️
            </span>{" "}
            by{" "}
            <a
              href="https://github.com/Oluwa-Laughter"
              className="underline hover:text-blue-500"
              target="_blank"
              rel="noreferrer"
            >
              LAUGHTER
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Layout;

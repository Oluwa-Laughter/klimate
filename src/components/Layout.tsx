import type { PropsWithChildren } from "react";

function Layout({ children }: PropsWithChildren) {
  return (
    <div className="bg-gradient-to-br from-background to-muted">
      <main className="min-h-screen container mx-auto px-4 py-8 ">
        {children}
      </main>

      <footer className="border-t backdrop-blur ">
        <div className="container mx-auto px-4 py-12 text-center text-gray-200">
          <p>
            Made with ❤️ by{" "}
            <a
              href="https://github.com/Oluwa-Laughter"
              className="underline hover:text-blue-500"
              target="_blank"
            >
              Isaac Makinde
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Layout;

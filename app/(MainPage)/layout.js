import Navbar from "@/components/Navbar";

export default function MainPageLayout({ children }) {
  return (
    <html>
      <body>
        <div>
          <Navbar />

          {children}
        </div>
      </body>
    </html>
  );
}

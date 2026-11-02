import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "mtaa. | Find a home in Embu",
  description: "Find locally reviewed apartments, studios and homes for rent in Embu, Kenya.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="en"><body>{children}</body></html>;
}

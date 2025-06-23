import "@/styles/globals.css"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Providers } from "./providers"
import clsx from "clsx"
import { fontSans } from "@/config/fonts"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MKM Garage - Adventure Awaits",
  description: "Premium motorcycles for the adventurous spirit",
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )} >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <Navbar />
            <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}

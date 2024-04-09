'use client';

import { Suspense } from "react"
import "@styles/globals.css";
import Nav from "@components/Nav";
import Provider from "@components/Provider";

export const metadata = {
  title: "Promptopia",
  description: "Discover & Share AI prompts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <Nav />
            <Suspense fallback={<div>Loading...</div>}>
              {children} </Suspense></main>
        </Provider>
      </body>
    </html>
  );
}

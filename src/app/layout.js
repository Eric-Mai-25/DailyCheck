'use client'

import "./globals.css";
import { Provider } from "react-redux";
import store from "./Store/store";

export default function RootLayout({ children }) {
  return (
    <Provider store={store}>
      <html lang="en">
        <body className={`antialiased`}>{children}</body>
      </html>
    </Provider>
  );
}

import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

type Props = {
  children: React.ReactNode;
};

export default function Layout(props: Props) {
  return (
    <div className="bg-primary">
      <Header />
      <div className="min-h-screen">{props.children}</div>
      <Footer />
    </div>
  );
}

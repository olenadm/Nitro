import { Fragment } from "react";
import { Poppins } from "next/font/google";
import Link from "next/link";
import Header from "./Header";
const poppins = Poppins({ weight: ["300", "400", "700"], subsets: ["latin"] });

function Layout(props) {
  return (
    <Fragment>
      <Header />
      <main className={`container my-4 my-md-5 py-2  ${poppins.className}`}>
        <div className="row gx-5">{props.children}</div>
      </main>
    </Fragment>
  );
}

export default Layout;

import { Fragment } from "react";
import { Work_Sans } from "next/font/google";
const work_sans = Work_Sans({ subsets: ["latin"] });

function Layout(props) {
  return (
    <Fragment>
      <main className={`container my-5 py-2  ${work_sans.className}`}>
        <div className="row">{props.children}</div>
      </main>
    </Fragment>
  );
}

export default Layout;

import { ReactNode } from "react";
import HeaderFragment from "./HeaderFragment";
import FooterFragment from "./FooterFragment";
import MainFragment from "./MainFragment";

function PageFragment(props: { children: ReactNode }) {
  return (
    <>
      <HeaderFragment />
      <MainFragment>
        {props.children}
      </MainFragment>
      <FooterFragment />
    </>
  );
}

export default PageFragment;
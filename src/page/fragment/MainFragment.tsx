import { ReactNode } from "react";

function MainFragment(props: { children: ReactNode }) {
  return (
    <main className="main d-flex flex-column">
      {props.children}
    </main>
  );
}

export default MainFragment;
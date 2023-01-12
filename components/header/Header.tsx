import * as React from "react";
import Image from "next/image";

import c from "./header.module.scss";

const Header: React.FC = () => {
  return (
    <header className={c.header}>
      <div className={c.container}>
        <div className={c.imageContainer}>
          <Image src="/global/logo.svg" alt="logo" width={0} height={0} className={c.image} />
        </div>
      </div>
    </header>
  );
};

export default Header;

import classNames from "classnames";
import { ReactNode } from "react";
import React from "react";

export type LogoBarGridProps = {
  tabletCols?: number;
  desktopCols?: number;
  children: ReactNode[];
};

const LogoBarGrid = ({
  tabletCols = 2,
  desktopCols = 4,
  children,
}: LogoBarGridProps) => {
  return (
    <ul
      className={classNames(
        `grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-x-8 gap-y-6 items-center`
      )}
    >
      {children}
    </ul>
  );
};

export default LogoBarGrid;

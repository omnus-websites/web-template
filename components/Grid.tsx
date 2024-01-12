import classNames from "classnames";
import { ReactNode } from "react";

type GridProps = {
  tabletCols?: string;
  desktopCols?: string;
  gapX?: string;
  gapY?: string;
  children: ReactNode;
};

const Grid = ({
  tabletCols = "md:grid-cols-2",
  desktopCols = "xl:grid-cols-4",
  gapX,
  gapY,
  children,
}: GridProps) => {
  return (
    <ul
      className={classNames(
        `grid grid-col-1 justify-items-center ${tabletCols} ${desktopCols}`,
        gapX,
        gapY
      )}
    >
      {children}
    </ul>
  );
};

export default Grid;

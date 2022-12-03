import { SVGProps } from "react";
import { ReactComponent as RightArrow } from "./right-arrow.svg";
import { ReactComponent as LeftArrow } from "./left-arrow.svg";

export enum IconType {
  RIGHT_ARROW = "right-arrow",
  LEFT_ARROW = "left-arrow",
}

export const iconComponentMap: Record<
  IconType,
  (props: SVGProps<SVGSVGElement>) => JSX.Element
> = {
  [IconType.RIGHT_ARROW]: (props) => <RightArrow {...props} />,
  [IconType.LEFT_ARROW]: (props) => <LeftArrow {...props} />,
};

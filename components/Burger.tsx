import classNames from "classnames";

enum BurgerVariants {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

type BurgerProps = {
  variant: BurgerVariants;
  setOpen: (bool: boolean) => void;
};

const Burger = ({ variant, setOpen }: BurgerProps) => {
  const isPrimary = variant === BurgerVariants.PRIMARY;

  const sharedClasses = classNames("h-[2px]", {
    "bg-black": isPrimary,
    "bg-white": !isPrimary,
  });

  return (
    <div
      className="flex flex-col justify-around w-8 h-8 p-2 md:hidden"
      onClick={() => setOpen(true)}
    >
      <div className={sharedClasses} />
      <div className={sharedClasses} />
      <div className={sharedClasses} />
    </div>
  );
};

export default Burger;

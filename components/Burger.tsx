type BurgerProps = {
  setOpen: (bool: boolean) => void;
};

const Burger = ({ setOpen }: BurgerProps) => (
  <div
    className="flex flex-col justify-around w-8 h-8 p-2 md:hidden"
    onClick={() => setOpen(true)}
  >
    <div className="h-[2px] bg-black" />
    <div className="h-[2px] bg-black" />
    <div className="h-[2px] bg-black" />
  </div>
);

export default Burger;

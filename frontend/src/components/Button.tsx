interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

function Button({ children, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="
        text-[#2f3035]
        font-semibold
        px-6
        py-3
        rounded-xl
        shadow-md
        transition
        duration-300
        hover:scale-105
        active:scale-95
      "
      style={{
        backgroundColor: "#e5e7f1"
      }}
    >
      {children}
    </button>
  );
}


export default Button;
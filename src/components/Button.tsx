interface props {
  label: string;
};

export const Button = ({ label }: props) => {
  return (
    <button className="bg-blue-600 text-white p-2 rounded-md">{label}</button>
  );
};


interface props {
  params: {
    name: string;
  };
}

function User({ params }: props) {
  return (
    <div>
      <h1>User: {params.name}</h1>
    </div>
  );
}

export default User;

import Card from "../card/card";

export default function Home(props) {
  const { user, origin } = props.data;
  console.log(user);
  return (
    <div className="container">
      <main>
        <h1 className="title">Hello world!</h1>
        <div style={{ display: 'flex', justifyContent: 'center'}}>
          <Card />
          <Card />
        </div>
        {user && (
          <div>
            {"User ID: "}
            {user.id}
          </div>
        )}
      </main>
    </div>
  );
}

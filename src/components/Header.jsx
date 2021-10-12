function Header({ results, date }) {
  if (results.shortname) {
    return (
      <section className="header">
        <h1>Carbon Intensity for {results.shortname}</h1>
        <h2>For: {date}</h2>
      </section>
    );
  } else {
    return <h1>Carbon Intensity for England</h1>;
  }
}

export default Header;

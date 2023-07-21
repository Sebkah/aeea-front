import './App.css';

function App() {
  /*   const [usager, setUsager] = useState(null); */

  /*   const statut = data.dossier.champs.filter(
    ({ label }) => label == 'Quel est votre statut ?'
  )[0].stringValue;
  const dateFin = data.dossier.champs.filter(
    ({ label }) => label == 'Date de fin de validité'
  )[0].stringValue; */

  const getData = async (e) => {
    e.preventDefault();
    const data = { id: e.target.dossierID.value };
    console.log(e.target.dossierID.value);

    try {
      const response = await fetch('http://localhost:3000/api/getData', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        /*  credentials: 'same-origin', */ // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': 'https://aeea-sncf.vercel.app',
        },
        body: JSON.stringify(data), // body data type must match "Content-Type" header
      });
      const responseData = await response.json();
      console.log(responseData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={getData}>
        <input type="" name="dossierID" label="dossierID" />
        <button> Envoyer </button>{' '}
      </form>{' '}
      {/*   {usager && (
        <>
          <div>
            <p> Statut </p> <p> {usager.statut} </p>{' '}
          </div>{' '}
          <div>
            <p> Date de fin </p> <p> {usager.dateFin} </p>{' '}
          </div>{' '}
        </>
      )} */}
    </>
  );
}

export default App;

import React from "react";
const ArrayWithData = (props) => {
  const [newData, setNewData] = React.useState([]);

  //perdorim useEffect ne menyre qe te dhenat e marra nga parenti te behen run vetem nje here
  //dhe te mos therriten aq here sa behet re-rander componenti

  React.useEffect(() => {
    console.log("re-rander", props);
    const data = props.arrayWithData;

    //per te marre keys-sat e objektit, pra per te transformuar array-in me objekte
    //perdor map method dhe llogjiken sesi merren key-sat e obj
    const keys = data.map((el) => {
      const objKeys = Object.keys(el);
      return objKeys;
    });
    console.log("keys", keys);

    const finalData = keys.flat(1); //heq nested array
    console.log("finalData", finalData);

    //per te eleminuar elementet e perseritur ne array perdorim new Set() method
    let finalDataWithArray = [...new Set(finalData)];
    console.log("finalDataWithArray", finalDataWithArray);

    setNewData(finalDataWithArray); //popullova useState()
  }, [props.arrayWithData]); //nese parent ndryshon propsin, funks brenda useffect nuk do re-renderizohet nese [eshte bosh] e si pasoje do kishim te dhenat e vjetra dhe
  //do re-renderizohen vetem nese vendosim [props.arrayWithdata ose vetem props qe do te thote i gjithe propsi]

  return (
    <div className="new-ul-list">
      <ul>
        {newData.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default ArrayWithData;

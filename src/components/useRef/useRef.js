import React from "react";
import './useref.scss'

const Component = () => {
  const refData = React.useRef(0);
  console.log("refData", refData);

  React.useEffect(() => {
    refData.current = 3;
    console.log("===>", refData);
  }, []);

  //ne rastin tone currenti qe kemi fut te useEffect nuk shfaqet ne dom pasi useRef nuk re-randerizohet ama ne memorjen e tij e ruan vleren 3 si vleren e fundit.
  //ne momentin kur parenti behet re-rander atehere dhe refData behet rerander dhe shfaq vleren e
  //fundit ne memorje.

  return (
    <div
      className="use-ref-current-data"
     
    >
     Child ref data :  {refData.current}
    </div>
  );
};

export default function UseRef() {
  const [data, setData] = React.useState(0);
  React.useEffect(() => {
    setTimeout(() => {
      setData(5);
    }, 5000);
  }, []);

  return (
    <div className="use-ref-data">
      <br></br>
      <Component /><br></br>
      <div
        className="use-ref-timeout-data"
       
      >
        Parent state value changes after 5 seconds: {data}
      </div>
    </div>
  );
}

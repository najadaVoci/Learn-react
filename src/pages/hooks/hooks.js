import UseState from "../../components/useState/useState";
import UseEffect from "../../components/useEffect/useEffect";
import UseRef from "../../components/useRef/useRef";
import UseMemo from "../../components/useMemo/useMemo";
import "./hooks.scss";
import UseCallback from "../../components/useCallback/useCallback";
function HooksPage() {
  return (
    <div className="hooks page-padding">
      <div className="hooks-use-state">
        <h2>Use state hook</h2>
        <p>
          Explain: Here we have a list of item and when we click each element,
          the color change.
        </p>
        <UseState />
      </div>
      <div className="hooks-use-effect">
        <h2>Use effect hook</h2>
        <p>
          Explain: In this example, we are using useEffect to trigger function,
          which colects the keys of a prop object on component init, and every
          time the prop changes by adding it to the dependency array
        </p>
        <UseEffect />
      </div>
      <div className="hooks-use-ref">
        <h2>Use ref hook</h2>
        <p>
          Explain: In this example, we have a child comonent which has a ref
          value , and udates it as soon as it mounts on the dom. This component
          is a child of another comonent which updates its state after 5seconds.
          This way it re-triggers the child component and ony then the useRef
          value is visualized on the dom, becuase modyfying the ref value doe
          not re-triggeres the comonent
        </p>
        <UseRef />
      </div>
      <div className="hooks-use-memo">
        <h2>Use memo hook</h2>
        <p>
          Explain: In this example, we ue useMemo hook to memoize the value of
          function callback which we do not want to re-evaluate every time the
          comonent might re-trigger itself because of other reasons such as
          udating the input value. useMemo hook also has its dependency array in
          which it can re-trigger the function once a value changes
        </p>
        <UseMemo />
      </div>
      <div className="hooks-use-callback">
        <h2>Use callback hook</h2>
        <p>
          Explain: In this example, we use useCallback hook to memoise a
          function.This is useful in usecases where a function is added to a
          dependency array and we do not want it to be different than the
          previous function in the previous render React does a strict
          comparision between re-renderes and since 2 functions are never the
          same it could triggere a infinite loop.
        </p>
        <UseCallback />
      </div>
    </div>
  );
}

export default HooksPage;

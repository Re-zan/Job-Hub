import React from "react";
import Banner from "../../utilities/Banner/Banner";

const Blog = () => {
  return (
    <div>
      <Banner title="All Blogs Are Here"></Banner>

      <div className="my_conatiner bg-gradient-to-r from-[#7e90fe0d] to-[#9873ff0d] my-11 border-[bg-gradient-to-r from-[#7E90FE] to-[#9873FF]] p-24">
        <h2 className=" font-semibold text-2xl py-6">
          When should you use context API?
        </h2>
        <p>
          Ans: The data flow of react is unidirectional. So if we need to pass
          data in nesting levels. We need to pass same props in different
          compnents which is very diffcult. The best solution is context api to
          solve this problem. Because Context API provides a way to share values
          like these between components without having to explicitly pass a prop
          through every level of the tree.{" "}
        </p>
        <hr className="my-8" />
        <h2 className=" font-semibold text-2xl py-6">What is a custom hook?</h2>
        <p>
          Ans: Custom hook isn't a build-in react hook. A react developer makes
          coustom hook. What a coustom hook will return and the arguments are
          decided by the react developer. A custom React JS hook is created by
          using the ‘use’ prefix. For eg, a custom hook can be named
          ‘useCounter’ . It is easy to make. It makes developer code cleaner.{" "}
        </p>
        <hr className="my-8" />

        <h2 className=" font-semibold text-2xl py-6">What is useRef?</h2>
        <p>
          Ans: useRef is a built-in React hook. It has two parameter one is
          inital value another one returns a object which contains current
          value. If we need get a value from useRef then we have to write
          .current.For eg data.current. We can use it instead of useSate. It is
          mutable when data do re-rendering. Because the value of the reference
          is persisted. It reduces codes. It is a synchronous function. It can
          change DOM element directly.{" "}
        </p>
        <hr className="my-8" />
        <h2 className=" font-semibold text-2xl py-6">What is useMemo?</h2>
        <p>
          Ans: useMemo is a built-in React hook. It enhances the performance of
          the project. It prevents useless re-renderings when previous props
          equal to current props.{" "}
        </p>
      </div>
    </div>
  );
};

export default Blog;

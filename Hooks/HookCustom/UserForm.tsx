import React from "react";
import useInput from "./useInput.tsx";

// const UserForm = () => {
//   const [fName, setFname] = useState();
//   const [lName, setLName] = useState();
//   const submitHandler = (e) => {
//     e.preventDefault();
//     alert(`Hello ${fName} ${lName}`);
//   };
//   return (
//     <div>
//       <form onSubmit={submitHandler}>
//         <div>
//           <label>First Name</label>
//           <input value={fName} onChange={(e) => setFname(e.target.value)} />
//         </div>
//         <div>
//           <label>Last Name</label>
//           <input value={lName} onChange={(e) => setLName(e.target.value)} />
//         </div>
//         <button>Submit</button>
//       </form>
//     </div>
//   );
// };

// export default UserForm;

const UserForm = () => {
  const [fName, bindFName, resetFName] = useInput("");
  const [lName, bindLName, resetLName] = useInput("");
  const submitHandler = (e) => {
    e.preventDefault();
    alert(`Hello ${fName} ${lName}`);
    resetFName();
    resetLName();
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label>First Name</label>
          <input {...bindFName} />
        </div>
        <div>
          <label>Last Name</label>
          <input {...bindLName} />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default UserForm;

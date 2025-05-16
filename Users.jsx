// import React, { useState } from "react";

// function Users() {
//   const user = [
//     {
//       Name: "chandu",
//       Email: "chandu@gamil.com",
//       Age: "21",
//     },
//     {
//       Name: "Bharath",
//       Email: "bharath@gamil.com",
//       Age: "1",
//     },
//   ];
//   let [name, setName] = useState("");
//   let [email, setEmail] = useState("");
//   let [age, setAge] = useState("");
//   //   setName(user.Name)
//   //   setEmail(user.Email)
//   //   setAge(user.Age)
// //   user.map((row) => {
// //     <ul>
// //       <li>{setName(row.Name)}</li>
// //       <li>{setEmail(row.Email)}</li>
// //       <li>{setAge(row.Age)}</li>
// //     </ul>;
// //   });

//   console.log(user)
//   return (
//     <div className="users">
//       <table border={1}>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Age</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
        
//           {user.map((ele)=>{
//             return <tr >
//                 <td>{ele.Name}</td>
//                 <td>{ele.Email}</td>
//                 <td>{ele.Age}</td>
//                 <td>Update</td>
//                 <td><Link to="/update-users">Update</Link></td>
//             </tr>
//           })}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default Users;
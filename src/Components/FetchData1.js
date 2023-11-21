// import { useState, useEffect } from "react";
// const url = "https://api.github.com/users/mojombo";

// const Conditionality = () => {
//   let [isLoading, setLoading] = useState(true);
//   let [isError, setIsError] = useState(false);
//   let [user, setUser] = useState("");

//   useEffect(() => {
//     fetch(url)
//       .then((res) => {
//         if (res.status >= 200 && res.status <= 200) {
//           return res.json();
//         } else {
//           setLoading(false);
//           setIsError(true);
//         }
//       })
//       .then((user) => {
//         setUser(user);
//         setLoading(false);
//       })
//       .catch((err) => console.log(err));
//   }, []);
//   if (isLoading) {
//     return <h1>Loading...</h1>;
//   }
//   if (isError) {
//     return <h1>Error...</h1>;
//   }
  
//   return <h1>{user.profile}</h1>;
// };
// export default Conditionality;
import { useState, useEffect } from "react";

const url = "https://api.github.com/users/defunkt";

const Conditionality = () => {
  let [isLoading, setLoading] = useState(true);
  let [isError, setIsError] = useState(false);
  let [user, setUser] = useState("");

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (res.status >= 200 && res.status < 300) {
          return res.json();
        } else {
          setLoading(false);
          setIsError(true);
        }
      })
      .then((userData) => {
        setUser(userData);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setIsError(true);
      });
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <h1>Error...</h1>;
  }

  return <h1>{user.login}</h1>;
};

export default Conditionality;

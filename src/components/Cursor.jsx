// import { useEffect } from "react";
// import "./styles/Cursor.css";

// function Cursor() {
//   useEffect(() => {
//     const moveCursor = (e) => {
//       const cursor = document.getElementById("circularcursor");
//       if (cursor) {
//         cursor.style.left = `${e.pageX}px`;
//         cursor.style.top = `${e.pageY}px`;
//       }
//     };

//     document.addEventListener("mousemove", moveCursor);

//     return () => {
//       document.removeEventListener("mousemove", moveCursor);
//     };
//   }, []);

//   return <div id="circularcursor" className="circularcursor"></div>;
// }

// export default Cursor;

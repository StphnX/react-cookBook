
// import { useEffect } from "react";
// import axios from "axios"

// const Contentful = () => {
//   const client = createClient({
//     space: 'fvwgdnm4oux1',
//     accessToken: '0F1deS2w-aiyaJ1sP8kSQU3A0hdskYT2rTMMbqWNK5o',
//     host: 'preview.contentful.com',
//   });
// }

// const getCookbook = async () => {
//   try {
//     const entries = await client.getEntries({
//       content_type: 'cookbook',
//       select: 'fields',
//     });


//     // content_type: 'cookbook',
//     //   select: 'fields',


//     const saniEntries = entries.map((item) => {
//       const name = item.name;
//       const description = item.description;
//       const ingredients = item.ingredients;
//       const img = item.image;

//       const id = item.id;
//       const group = item.group;
//       return { name, description, ingredients, img, id, group };
//     });

//     return saniEntries;
//   } catch (error) {
//     console.log(error);
//   }
//   ;

//   return { getCookbook };
// };

// export default { getCookbook };

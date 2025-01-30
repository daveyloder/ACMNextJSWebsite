// utils/api-helpers.js

export function getStrapiURL(path = "") {
  const BASE_URL =
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1338";
  return `${BASE_URL}/api${path}?populate=*`;
}

// export function getStrapiUrlMembers(path = "") {
//   const BASE_URL =
//     process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1338";
//   return `${BASE_URL}/api${path}?populate=*`;
// }

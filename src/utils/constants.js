export const LOGO_URL = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const APP_KEY = "80b1153987409cc21b579f7edf85759e";
export const APP_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MGIxMTUzOTg3NDA5Y2MyMWI1NzlmN2VkZjg1NzU5ZSIsIm5iZiI6MTcyMTIzOTAyOC4wMjQ2NSwic3ViIjoiNjY5ODAzZWYxYTIwOWNmNmJlMjMwZmZhIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.BfBO1IrXB9IFYl8QAJG0zJRQclRwK62kcwDhp_Np-qg";

export const IMG_CDN = "https://image.tmdb.org/t/p/w400//";

export const OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer ' + process.env.REACT_APP_TMDB_KEY,
    }
  };

export const BG_URL = "https://assets.nflxext.com/ffe/siteui/vlv3/8728e059-7686-4d2d-a67a-84872bd71025/e90516bd-6925-4341-a6cf-0b9f3d0c140a/IN-en-20240708-POP_SIGNUP_TWO_WEEKS-perspective_WEB_34324b52-d094-482b-8c2a-708dc64c9065_small.jpg"

export const OPEN_API_KEY = process.env.REACT_APP_OPEN_API_KEY;
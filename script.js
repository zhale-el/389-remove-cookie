const setCookieBtn = document.querySelector("button");
const getCookieBtn = document.querySelector("#get-cookie");
const removeCookie = document.querySelector("#remove-cookie");

setCookieBtn.addEventListener("click", () => {
  const now = new Date();

  let expiresDay = now.setTime(now.getTime() + 2 * 24 * 60 * 60 * 1000);
  console.log(now);
  document.cookie = `username=zhale;path=/;expires=${now}`;
});

getCookieBtn.addEventListener("click", () => {
  let mainCookieName = prompt("Enter the name");

  let cookiesArray = document.cookie.split(";");
  console.log(cookiesArray);
  let mainCookie = null;
  cookiesArray.some((cookie) => {
    if (cookie.includes(mainCookieName)) {
      mainCookie = cookie.substring(cookie.indexOf("=") + 1);
      return true;
    }
  });
  console.log(mainCookie);
});
removeCookie.addEventListener("click", () => {
  let mainCookieName = prompt("Enter the main cookie name");
  const now = new Date();
  now.setTime(now.getTime() - 2 * 24 * 60 * 60 * 1000);
  console.log(now);
  document.cookie = `${mainCookieName}=22;path=/;expries=${now}`;
});

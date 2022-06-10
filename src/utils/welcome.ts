import { loadSessionStorage } from "./utilsLocalStorage";

export function welcome(): void {
  let title = document.querySelector<Element>("#welcome");
  const {username} = loadSessionStorage()

  title.textContent = `Olá! ${username}`

}
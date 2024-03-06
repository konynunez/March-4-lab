let
 par1 = document.querySelector("h1");
par1.addEventListener("mouseover", () => {
  par1.style.color = "green"
})

par1.addEventListener("mouseout", () => {
  par1.style.color = "black"
})
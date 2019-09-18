const renderText = text => {
  const section = document.createElement("section");
  section.innerText = text;
  section.style.margin = "2rem 1rem";
  return section;
};

export default renderText;

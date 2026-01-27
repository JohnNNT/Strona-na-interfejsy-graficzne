/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
const imgInp = document.getElementById("mod_viewable");
const container = document.getElementById("preview");

imgInp.addEventListener() = evt => {
  const files = imgInp.files;
  for(const file in files) {
      console.log(typeof(file));
      console.log(file);
      if (file) {
          const newImage = document.importNode(document.getElementById("mod_image").content, true);
          newImage.src = URL.createObjectURL(file);
          container.appendNode(newImage);
      }
  }
};
function isLandscape (width, height) {
  if (width == height) return 'Square';
  return (width > height) ? 'Landscape' : 'Portrait';
}

let width = 800;
let height = 800;
console.log("This display geometry is", isLandscape (width, height));

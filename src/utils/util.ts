export function loadImage(url: string, canvas: any) {
  return new Promise((resolve, reject) => {
    const image = canvas.createImage();
    image.src = url;
    image.onload = function () {
      resolve(image);
    };
    image.onerror = function (error: any) {
      reject(error);
    };
  });
}

// Media Resize

// export const smallImage = (imagePath, width, height) => {
//   const image = imagePath.match(/media\/screenshots/)
//     ? imagePath.replace(
//         "media/screenshots",
//         `media/resize/${width}/-/screenshots`
//       )
//     : imagePath.replace(
//         "/media/games/",
//         `/media/crop/${width}/${height}/games/`
//       );

//   return image;
// };

// util.jsx

// Media Resize
export const smallImage = (imagePath, width, height) => {
  // Check if imagePath is not null or undefined
  if (imagePath) {
    const image = imagePath.match(/media\/screenshots/)
      ? imagePath.replace(
          "media/screenshots",
          `media/resize/${width}/-/screenshots`
        )
      : imagePath.replace(
          "/media/games/",
          `/media/crop/${width}/${height}/games/`
        );

    return image;
  } else {
    // Handle the case where imagePath is null or undefined
    console.error("Invalid imagePath:", imagePath);
    // You can return a default image path or do something else as needed
    return imagePath; // Or return a default path, or throw an error, etc.
  }
};

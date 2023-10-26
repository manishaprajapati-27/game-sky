// Media Resize

export const smallImage = (imagePath, width, height) => {
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
};

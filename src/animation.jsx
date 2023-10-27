export const fadeIn = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.7,
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.7 },
    },
  },
};

export const zoomIn = {
  hidden: {
    opacity: 0,
    scale: 0.4,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.7 },
    },
  },
};

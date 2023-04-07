export const verifyEmptyName = async (name: string) => {
  const nameIsValid = name.length < 1;

  return nameIsValid;
};

export const verifyEmptyDescription = async (description: string) => {
  const descriptionIsvalid = description.length < 1;

  return descriptionIsvalid;
};

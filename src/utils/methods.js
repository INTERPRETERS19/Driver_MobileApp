export const isValidObjField = obj => {
  return Object.values(obj).every(value => value.trim());
};

export const updateError = (error, stateUpdater) => {
  stateUpdater(error);
  setTimeout(() => {
    stateUpdater('');
  }, 5000);
};

export const updatesuccess = (success, stateUpdater) => {
  stateUpdater(success);
  setTimeout(() => {
    stateUpdater('');
  }, 3000);
};

export const isValidEmail = value => {
  const regx = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  return regx.test(value);
};

export const isValidPassword = value => {
  const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
  return PWD_REGEX.test(value);
};

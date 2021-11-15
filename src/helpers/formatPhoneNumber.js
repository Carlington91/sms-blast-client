export const formatter = (val) => {
  if (!val) {
    return;
  } else {
    let phoneNum = val && val.replace(/\D/g, '');
    let size = phoneNum.length;

    if (size > 0) phoneNum = `(${phoneNum}`;
    if (size > 3)
      phoneNum = `${phoneNum.slice(0, 4)}) ${phoneNum.slice(4, 11)}`;
    if (size > 6) phoneNum = `${phoneNum.slice(0, 9)}-${phoneNum.slice(9)}`;

    return phoneNum;
  }
};

// export const formatter = (val) => {
//   if (!val) return;
//   const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
//   if (phoneRegex.test(val)) {
//     val.replace(phoneRegex, '($1) $2-$3');
//     return val;
//   } else {
//     console.log('error');
//   }
// };

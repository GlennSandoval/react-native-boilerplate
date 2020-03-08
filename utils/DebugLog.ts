const debugLog = (obj: object, showFunction = false) => {
  console.log(JSON.stringify(
    obj,
    (k, v) => {
      if (typeof v === 'function') {
        if(showFunction) {
          return 'function';
        }
        return undefined;
      }
      return v;
    },
    2,
  ));
};

export default debugLog;

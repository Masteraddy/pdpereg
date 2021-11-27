const polling = require("./polling.json");
const ngrState = require("./ngrstate.json");

const getState = () => {
  const one = polling.map((val) => val.State);
  return [...new Set(one)];
};

const getLGA = (state) => {
  const st = polling.filter((val) => val.State == state);
  const one = st.map((val) => val.Localgovt);
  return [...new Set(one)];
};
const getWard = (state, lga) => {
  const st = polling.filter((val) => val.State == state && val.Localgovt == lga);
  const one = st.map((val) => val.Ward);
  return [...new Set(one)];
};

const getPollingUnit = (state, lga, ward) => {
  const st = polling.filter(
    (val) => val.State == state && val.Localgovt == lga && val.Ward == ward
  );
  const one = st.map((val) => val.PollingUnit);
  return [...new Set(one)];
};

console.log("PU", getPollingUnit("ABIA", "ABA SOUTH", "ENYIMBA"));
console.log("Ward", getWard("ABIA", "ABA SOUTH"));
console.log("LGA", getLGA("ABIA"));
console.log("State", getState());

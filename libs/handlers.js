import polling from "./polling.json";
// import ngrState from "./ngrstate.json";

export const getState = () => {
  const one = polling.map((val) => val.State);
  return [...new Set(one)];
};

export const getLGA = (state) => {
  const st = polling.filter((val) => val.State == state);
  const one = st.map((val) => val.Localgovt);
  return [...new Set(one)];
};

export const getWard = (state, lga) => {
  const st = polling.filter((val) => val.State == state && val.Localgovt == lga);
  const one = st.map((val) => val.Ward);
  return [...new Set(one)];
};

export const getPollingUnit = (state, lga, ward) => {
  const st = polling.filter(
    (val) => val.State == state && val.Localgovt == lga && val.Ward == ward
  );
  const one = st.map((val) => val.PollingUnit);
  return [...new Set(one)];
};

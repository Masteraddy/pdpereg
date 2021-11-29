import Dexie from "dexie";

export const db = new Dexie("clientdb");
db.version(1).stores({
  members:
    "votersID,title, firstname, surname, othername, gender, dateofbirth,phonenumber,phonenetwork,yearofjoining,email,state,localgovt,ward,votingstate,votinglocalgovt,votingward,votingpu,contactaddress,formerpartyposition,formerelectedposition",
});

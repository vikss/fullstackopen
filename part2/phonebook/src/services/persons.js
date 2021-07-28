import axios from "axios";

const dataUrl = "http://localhost:3001/persons";
const getAll = () => {
  return axios.get(dataUrl).then((response) => response.data);
};
const add = (person) => {
  return axios.post(dataUrl, person).then((response) => response.data);
};
const update = (id, newPersonObject) => {
  return axios
    .put(`${dataUrl}/${id}`, newPersonObject)
    .then((response) => response.data);
};

const deletePerson = (id) => {
  debugger;
  return axios.delete(dataUrl + "/" + id);
};
export default { getAll, add, deletePerson, update };

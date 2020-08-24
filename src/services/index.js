import axios from "axios";

export const getAll = async () =>
  await axios
    .get(`${process.env.REACT_APP_API_URI}`)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });

export const get = async () =>
  await axios
    .get(`${process.env.REACT_APP_API_URI}`)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });

export const insert = async (data) =>
  await axios
    .post(`${process.env.REACT_APP_API_URI}`,
    {...data})
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });

export const updateItem = async (id) =>
  await axios
    .put(`${process.env.REACT_APP_API_URI}${id}`)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });

export const deleteItem = async (id) =>
  await axios
    .delete(`${process.env.REACT_APP_API_URI}${id}`)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });

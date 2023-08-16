// api/airtableApi.js
import axios from 'axios';

const API_KEY = 'patWVpAVjLM615DKS.01a116ce4d1497eed56445b29b38024f2ad2cbdfaccc597221e43543e48ab216';//import.meta.env.AIRTABLE_API_KEY;
const BASE_ID = 'appMuLRQPxpqShYQ3'; //import.meta.env.AIRTABLE_BASE_ID;

const instance = axios.create({
  baseURL: `https://api.airtable.com/v0/${BASE_ID}`,
  headers: {
    Authorization: `Bearer ${API_KEY}`,
    'Content-Type': 'application/json',
  },
});

export const getRecords = async (table) => {
  try {
    const response = await instance.get(`/${table}`);
    return response.data.records;
  } catch (error) {
    console.error('Error fetching records:', error);
    throw error;
  }
};

export const createRecord = async (data, table) => {
  try {
    const response = await instance.post(`/${table}`, { fields: data });
    return response.data;
  } catch (error) {
    console.error('Error creating record:', error);
    throw error;
  }
};

// hooks/useAirtable.js
import { useEffect, useState } from 'react';
import { getRecords, createRecord } from '../api/airtableApi';

const useAirtable = () => {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

/*   useEffect(() => {
    fetchRecords('candidates');
  }, []); */

  const fetchRecords = async (table) => {
    try {
      setLoading(true);
      const data = await getRecords(table);
      console.log('Data get ...', data)
      setRecords(data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  const addRecord = async (formData, table) => {
    try {
      setLoading(true);
      const newRecord = await createRecord(formData, table);
      console.log('Data post ...', newRecord)
      setRecords([...records, newRecord]);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  return {
    records,
    loading,
    error,
    addRecord,
  };
};

export default useAirtable;

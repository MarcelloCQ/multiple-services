import React, { useState } from 'react';
import * as XLSX from 'xlsx';

type ExcelRow = (string | number)[];
type ExcelHeader = string[];

export const useDataEntry = () => {
  const [text, setText] = useState('');
  const [file, setFile] = useState('');
  const [textCopy, setTextcopy] = useState(false);
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [show, setShow] = useState(false);

  const handleCloseModal = () => {
    setShow(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const file = e.target.files;

    if (file) {
      if (!file[0].name.match(/\.(xlsx|xls)$/i)) {
        setTitle('Ups!');
        setMessage('Por favor, arrastra un archivo Excel válido.');
        setShow(true);
        return;
      }

      setFile(file[0].name);

      const reader = new FileReader();

      reader.onload = (e) => {
        const data = e.target?.result;

        if (data) {
          const arrayBuffer = data as ArrayBuffer;

          const workBook = XLSX.read(arrayBuffer, { type: 'array' });
          const firstSheetName = workBook.SheetNames[0];
          const worksheet = workBook.Sheets[firstSheetName];
          const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

          const headers = jsonData[0] as ExcelHeader;
          const rows = jsonData.slice(1) as ExcelRow[];

          const jsonArray = rows.map((row: ExcelRow) => {
            const obj: Record<string, string | number> = {};
            headers.forEach((header: string, index: number) => {
              obj[header] = row[index];
            });
            return obj;
          });

          const jsonString = JSON.stringify(jsonArray, null, 2);

          setText(jsonString);
        }
      };

      reader.readAsArrayBuffer(file[0]);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLTextAreaElement>) => {
    e.preventDefault();

    const file = e.dataTransfer.files[0];

    if (file) {
      if (!file.name.match(/\.(xlsx|xls)$/i)) {
        setTitle('Ups!');
        setMessage('Por favor, arrastra un archivo Excel válido.');
        setShow(true);
        return;
      }

      setFile(file.name);

      const reader = new FileReader();

      reader.onload = (e) => {
        const data = e.target?.result;

        if (data) {
          const arrayBuffer = data as ArrayBuffer;

          const workBook = XLSX.read(arrayBuffer, { type: 'array' });
          const firstSheetName = workBook.SheetNames[0];
          const worksheet = workBook.Sheets[firstSheetName];
          const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

          const headers = jsonData[0] as ExcelHeader;
          const rows = jsonData.slice(1) as ExcelRow[];

          const jsonArray = rows.map((row: ExcelRow) => {
            const obj: Record<string, string | number> = {};
            headers.forEach((header: string, index: number) => {
              obj[header] = row[index];
            });
            return obj;
          });

          const jsonString = JSON.stringify(jsonArray, null, 2);

          setText(jsonString);
        }
      };

      reader.readAsArrayBuffer(file);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
  };

  const handleCopyText = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setTextcopy(true);

      setTimeout(() => {
        setTextcopy(false);
      }, 3000);
    } catch (error) {
      setTitle('Ups!');
      setMessage('No se pudo copiar el texto al portapapeles.');
      setShow(true);
      console.log(error);
    }
  };

  return {
    setText,
    text,
    setFile,
    file,
    handleDrop,
    handleDragOver,
    handleCopyText,
    handleChange,
    title,
    message,
    handleCloseModal,
    show,
    textCopy,
  };
};

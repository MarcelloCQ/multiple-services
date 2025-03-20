import React, { useState } from 'react';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';

interface ImageData {
  file: File;
  url: string;
  width: number;
  height: number;
  aspectRatio: number;
}

const useImage = () => {
  const [images, setImages] = useState<ImageData[]>([]);
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState('');
  const [title, setTitle] = useState('');

  const handleCloseModal = () => {
    setShow(false);
  };

  const handleImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const imgFiles = e.currentTarget.files;

    if (imgFiles) {
      const newImages = Array.from(imgFiles).map((file) => ({
        file,
        url: URL.createObjectURL(file),
        width: 0,
        height: 0,
        aspectRatio: 1,
      }));

      if (
        !newImages.every((element) => {
          return element.file.name.match(/^[^.\s]+\.(png|jpg|jpeg|webp)$/i);
        })
      ) {
        setShow(true);
        setTitle('Ups!');
        setMessage(
          'Solo se admiten imágenes con extensión png, jpg, jpeg y webp. Si estás seguro que estás cargando las imágenes con extensión correcta, revisa el nombre del archivo, retira espacios en blanco, minúsculas, puntos, o caractéres especiales. ejemplo: imagen-nombrada-correctamente.'
        );
        return;
      }

      Promise.all(
        newImages.map((img) => {
          return new Promise((resolve) => {
            const imgElement = new Image();
            imgElement.onload = () => {
              img.width = imgElement.width;
              img.height = imgElement.height;
              img.aspectRatio = imgElement.width / imgElement.height;
              resolve(img);
            };
            imgElement.src = img.url;
          });
        })
      ).then((imagesWithSizes) => {
        setImages(imagesWithSizes as ImageData[]);
      });
    }
  };

  const updateImageSize = (
    index: number,
    newWidth: number | undefined,
    newHeight: number | undefined
  ) => {
    setImages((prevImages) => {
      const updatedImages = [...prevImages];
      const image = updatedImages[index];

      if (newWidth !== undefined) {
        image.width = newWidth;
        image.height = newWidth / image.aspectRatio;
      } else if (newHeight !== undefined) {
        image.height = newHeight;
        image.width = newHeight * image.aspectRatio;
      }

      return updatedImages;
    });
  };

  const handleGenerate = async () => {
    const zip = new JSZip();

    for (let i = 0; i < images.length; i++) {
      const image = images[i];

      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');

      if (!ctx) {
        setTitle('Ups!');
        setMessage('No se pudo generar la imagen');
        setShow(true);
        return;
      }

      canvas.width = image.width;
      canvas.height = image.height;

      const imgElement = new Image();
      imgElement.src = image.url;

      await new Promise<void>((resolve) => {
        imgElement.onload = () => {
          ctx.drawImage(imgElement, 0, 0, image.width, image.height);

          canvas.toBlob((blob) => {
            if (blob) {
              zip.file(`image_${i + 1}.png`, blob);
              resolve();
            } else {
              console.error('No se pudo convertir el canvas a Blob');
              resolve();
            }
          }, 'image/png');
        };
      });
    }

    zip.generateAsync({ type: 'blob' }).then((content) => {
      saveAs(content, 'images.zip');
    });
  };

  return {
    images,
    handleImg,
    updateImageSize,
    handleGenerate,
    handleCloseModal,
    show,
    message,
    title,
  };
};

export default useImage;

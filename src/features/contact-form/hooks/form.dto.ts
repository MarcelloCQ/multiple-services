export interface FormBodyDTO {
  name: string;
  email: string;
  message: string;
}

function validarFormulario(
  name: string,
  email: string,
  message: string
): boolean {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Validación de tipos
  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string"
  ) {
    throw new Error("Todos los campos deben ser de tipo string");
  }

  // Validación del nombre
  if (name.length < 4) {
    throw new Error("El nombre debe tener al menos 4 caracteres");
  }

  // Validación del correo electrónico
  if (!regex.test(email)) {
    throw new Error("El correo electrónico no es válido");
  }

  // Validación del mensaje
  if (message.length < 1) {
    throw new Error("El mensaje no puede estar vacío");
  }

  return true;
}

export const transformData = (formData: FormData): FormBodyDTO => {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  if (name === null || email === null || message === null) {
    throw new Error("Todos los campos son requeridos");
  }

  const nameStr = name as string;
  const emailStr = email as string;
  const messageStr = message as string;

  validarFormulario(nameStr, emailStr, messageStr);

  return {
    name: nameStr,
    email: emailStr,
    message: messageStr,
  };
};

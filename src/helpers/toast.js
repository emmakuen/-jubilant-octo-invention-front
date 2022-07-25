import { toast } from "react-toastify";

const toastConfig = {
  position: "bottom-center",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

export const showErrorMessage = (errorMessage, toastId) => {
  return toast.error(errorMessage, { ...toastConfig, toastId });
};

export const showSuccessMessage = (successMessage, toastId) => {
  return toast.success(successMessage, { ...toastConfig, toastId });
};

export const showInfoMessage = (infoMessage, toastId) => {
  return toast.info(infoMessage, { ...toastConfig, toastId });
};

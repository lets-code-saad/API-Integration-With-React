import { useForm, Controller } from "react-hook-form";
import { } from "@mui/material";
import 'react-quill/dist/quill.snow.css';
import Header from "./Components/Header/Header";
import MainSectionHome from "./Components/Main/MainSectionHome";

function App() {
  const { register,
    handleSubmit,
    reset,
    setValue,
    control,
    watch,
    formState: { errors } } = useForm();


 return (
  <>
  <Header/>
  <MainSectionHome/>
  </>
  )
}

export default App

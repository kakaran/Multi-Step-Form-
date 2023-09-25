import * as Yup from 'yup';


export const personalSchema = Yup.object().shape({
    name: Yup.string().required("Name field is required"),
    email: Yup.string().email().required("Email field is required"),
    phone: Yup.number().typeError("Phone field is required").required("Phone field is required"),
})
import * as Yup from 'yup'

export default Yup.object().shape({
    name:Yup.string().trim().min(3).max(20).required(),
    email:Yup.string().trim().email().min(8).max(40).required(),
    street:Yup.string().trim().min(5),
    postalcode:Yup.string().trim().min(5)
})
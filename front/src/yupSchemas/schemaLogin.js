import * as Yup from 'yup'

export default Yup.object().shape({
    email: Yup.string().trim().email().min(8).max(40).required(),
    password: Yup.string().trim().min(5).required(),
})
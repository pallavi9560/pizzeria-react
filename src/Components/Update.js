import { useFormik } from "formik";
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import * as Yup from 'yup';
import { useState, useEffect } from "react";




function Update() {

    const { id } = useParams();
    const [items, setMenu] = useState(null);


    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:5000/item/${id}`)
            .then(response => {
                setMenu(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the item', error)
            })
    }, [id])


    const formik = useFormik({
        initialValues: {
            image: items?.image || '',
            name: items?.name || '',
            description: items?.description || '',
            dietarypreference: items?.dietarypreference || '',
            size: items?.size || '',
            toppings: items?.toppings || '',
            price: items?.price || '',
            crust: items?.crust || '',
            extratoppings: items?.extratoppings || ''
        },
        enableReinitialize: true,

        validationSchema: Yup.object({
            image: Yup.string().required('Image URL is required'),
            name: Yup.string()
                .min(5, 'Name must be at least 5 characters')
                .required('Name is required'),
            price: Yup.number()
                .min(1, 'Price must be greater than 0')
                .required('Price is required'),
            dietarypreference: Yup.string()
                .min(3, 'Preference must be at least 5 characters')
                .required('Preference is required'),
            name: Yup.string()
                .min(4, 'Size must be at least 5 characters')
                .required('Size is required'),

        }),
        onSubmit: (values, { setSubmitting, resetForm, setStatus }) => {
            axios.put(`http://localhost:5000/item/${id}`, values)
                .then(response => {
                    setStatus('success');
                    resetForm();
                    navigate('/menu');
                })
                .catch(error => {
                    setStatus('error');
                })
                .finally(() => {
                    setSubmitting(false);
                });
        },
    });

    const backgroundStyle = {
        backgroundImage: "url('https://cdn.pixabay.com/photo/2023/08/12/02/42/ai-generated-8184596_1280.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        padding: '20px'
    };


    return (
        <div style={backgroundStyle}>
            <div className="container mt-4">
                <h2>Update Pizza</h2>


                <form onSubmit={formik.handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="image" className="form-label" style={{ fontWeight: 'bold' }}>Image URL</label>
                        <input
                            id="image"
                            name="image"
                            type="text"
                            className="form-control"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.image}
                        />


                        {
                            formik.touched.image && formik.errors.image ? (
                                <div className="text-danger">{formik.errors.image}</div>
                            ) : null
                        }
                    </div>






                    <div className="mb-3">
                        <label htmlFor="name" className="form-label" style={{ fontWeight: 'bold' }}>Name</label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            className="form-control"
                            onChange={formik.handleChange}
                            value={formik.values.name}
                        />


                        {
                            formik.touched.name && formik.errors.name ? (
                                <div className="text-danger">{formik.errors.name}</div>
                            ) : null
                        }
                    </div>


                    <div className="mb-3">
                        <label htmlFor="description" className="form-label" style={{ fontWeight: 'bold' }}>Description</label>
                        <input
                            id="description"
                            name="description"
                            type="text"
                            className="form-control"
                            onChange={formik.handleChange}
                            value={formik.values.description}
                        />


                        {
                            formik.touched.description && formik.errors.description ? (
                                <div className="text-danger">{formik.errors.description}</div>
                            ) : null
                        }
                    </div>



                    <div className="mb-3">
                        <label htmlFor="dietarypreference" className="form-label" style={{ fontWeight: 'bold' }}>Dietary Preference</label>
                        <input
                            id="dietarypreference"
                            name="dietarypreference"
                            type="text"
                            className="form-control"
                            onChange={formik.handleChange}
                            value={formik.values.dietarypreference}
                        />


                        {
                            formik.touched.dietarypreference && formik.errors.dietarypreference ? (
                                <div className="text-danger">{formik.errors.dietarypreference}</div>
                            ) : null
                        }
                    </div>






                    <div className="mb-3">
                        <label htmlFor="size" className="form-label" style={{ fontWeight: 'bold' }}>Size</label>
                        <input
                            id="size"
                            name="size"
                            type="text"
                            className="form-control"
                            onChange={formik.handleChange}
                            value={formik.values.size}
                        />


                        {
                            formik.touched.size && formik.errors.size ? (
                                <div className="text-danger">{formik.errors.gear}</div>
                            ) : null
                        }
                    </div>






                    <div className="mb-3">
                        <label htmlFor="toppings" className="form-label" style={{ fontWeight: 'bold' }}>Toppings</label>
                        <input
                            id="toppings"
                            name="toppings"
                            type="text"
                            className="form-control"
                            onChange={formik.handleChange}
                            value={formik.values.toppings}
                        />


                        {
                            formik.touched.toppings && formik.errors.toppings ? (
                                <div className="text-danger">{formik.errors.toppings}</div>
                            ) : null
                        }
                    </div>




                    <div className="mb-3">
                        <label htmlFor="price" className="form-label" style={{ fontWeight: 'bold' }}>Price</label>
                        <input
                            id="price"
                            name="price"
                            type="number"
                            className="form-control"
                            onChange={formik.handleChange}
                            value={formik.values.price}
                        />


                        {
                            formik.touched.price && formik.errors.price ? (
                                <div className="text-danger">{formik.errors.price}</div>
                            ) : null
                        }
                    </div>




                    <div className="mb-3">
                        <label htmlFor="crust" className="form-label" style={{ fontWeight: 'bold' }}>Crust</label>
                        <input
                            id="crust"
                            name="crust"
                            type="text"
                            className="form-control"
                            onChange={formik.handleChange}
                            value={formik.values.crust}
                        />


                        {
                            formik.touched.crust && formik.errors.crust ? (
                                <div className="text-danger">{formik.errors.crust}</div>
                            ) : null
                        }
                    </div>




                    <div className="mb-3">
                        <label htmlFor="extratoppings" className="form-label" style={{ fontWeight: 'bold' }}>Extra Toppings</label>
                        <input
                            id="extratoppings"
                            name="extratoppings"
                            type="text"
                            className="form-control"
                            onChange={formik.handleChange}
                            value={formik.values.extratoppings}
                        />


                        {
                            formik.touched.extratoppings && formik.errors.extratoppings ? (
                                <div className="text-danger">{formik.errors.extratoppings}</div>
                            ) : null
                        }
                    </div>




                    <button type="submit" className="btn btn-primary">
                        submit
                    </button>
                </form>


            </div>
        </div>
    )


}


export default Update;

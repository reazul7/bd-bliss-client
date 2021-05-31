import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    // console.log(watch("example"));

    const[imageURL, setImageUrL] = useState(null);


    const onSubmit = (data) => {
        console.log(data)
        const eventData = {
             title:data.title,
            price:data.price,
             imageURL:imageURL
        }
        console.log(eventData)
        const url = `http://localhost:5050/addProduct`
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(eventData),
        }).then(res=> console.log('server silde',res))
    };


    const handleImgUpload = event => {
        console.log(event.target.files[0])
        const imageData = new FormData()
        imageData.set('key', 'd371491237d968517d992b8f6982be6a')
        imageData.append('image', event.target.files[0])
        axios.post('https://api.imgbb.com/1/upload',
            imageData)
          .then(function (response) {
            setImageUrL(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });

    }
    return (
        <div>
             <form onSubmit={handleSubmit(onSubmit)}>

     <input defaultValue="New Product" {...register("title")} />
        <br/>
      <input {...register("price", { required: true })} />
      {errors.exampleRequired && <span>This field is required</span>}
    <br />
    <input type="file" onChange={handleImgUpload} />
                <input type="submit"/>
    </form>
        </div>
    );
};

export default AddProduct;
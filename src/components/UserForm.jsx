import React from "react";
import { useForm } from "react-hook-form";
import cl from '../styles/UserForm.module.css'

const  UserForm = ({firstName, lastName, email,street,city,zipcode,phone,website,comment}) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <>
    {website &&
   <form с onSubmit={handleSubmit(onSubmit)}
   className={cl.form}>

      <label htmlFor="firstName">First Name</label>
      <input
      defaultValue={firstName}
        placeholder="bill"
        {...register("firstName", {required:true})}
      />

      <label htmlFor="lastName">Last Name</label>
      <input
        defaultValue={lastName}
        placeholder="luo"
        {...register("lastName", {required:true})}
      />

      <label htmlFor="email">Email</label>
      <input
        defaultValue={email}
        placeholder="bluebill1049@hotmail.com"
        type="email"
        {...register("email", {required:true})}
      />

      <label htmlFor="street">street</label>
      <input
        defaultValue={street}
        placeholder="bluebill1049@hotmail.com"
        {...register("street", {required:true})}
      />

      <label htmlFor="city">city</label>
      <input
        defaultValue={city}
        {...register("city", {required:true})}
      />

      <label htmlFor="zipcode">zipcode</label>
      <input
        defaultValue={zipcode}
        {...register("zipcode", {required:true})}
      />

      <label htmlFor="phone">phone</label>
      <input
        defaultValue={phone}
        {...register("phone", {required:true})}
      />

      <label htmlFor="website">website</label>
      <input
        defaultValue={website}
        {...register("website", {required:true})}
      />

      <label htmlFor="comment">comment </label>
      <textarea
      defaultValue={comment}
      {...register("comment")}
      />

      <input type="submit" />
    </form>
    }
    </>
  );
};

export default UserForm;


import React from "react";
import { useForm } from "react-hook-form";

// The following component is an example of your existing Input Component


// you can use React.forwardRef to pass the ref too



const UserForm = ({props}) => {
  const { register, handleSubmit } = useForm();
  const defaultValues = {
    firstName: props.name,
    lastName: props.username,
    email: props.email,
    street: props.address?.street,
    city: props.address?.city,
    zipcode: props.address?.zipcode,
    phone: props.phone,
    website: props.website,
    comment: "",
  };

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="firstName">First Name</label>
      <input
        defaultValue={defaultValues.firstName}
        placeholder="bill"
        {...register("firstName")}
      />

      <label htmlFor="lastName">Last Name</label>
      <input
        defaultValue={defaultValues.lastName}
        placeholder="luo"
        {...register("lastName")}
      />

      <label htmlFor="email">Email</label>
      <input
        defaultValue={defaultValues.email}
        placeholder="bluebill1049@hotmail.com"
        type="email"
        {...register("email")}
      />
      <label htmlFor="street">street</label>
      <input
        defaultValue={defaultValues.street}
        placeholder="bluebill1049@hotmail.com"
       
        {...register("street")}
      />

<label htmlFor="city">city</label>
      <input
        defaultValue={defaultValues.city}
       
       
        {...register("city")}
      />

<label htmlFor="zipcode">zipcode</label>
      <input
        defaultValue={defaultValues.zipcode}
        
       
        {...register("zipcode")}
      />

<label htmlFor="phone">phone</label>
      <input
        defaultValue={defaultValues.phone}
        
       
        {...register("phone")}
      />

<label htmlFor="website">website</label>
      <input
        defaultValue={defaultValues.website}
        
       
        {...register("website")}
      />

      <label htmlFor="comment">comment </label>
      <textarea
      defaultValue={defaultValues.comment}
      {...register("comment")}
      />


      <input type="submit" />
    </form>
  );
};
export default UserForm;


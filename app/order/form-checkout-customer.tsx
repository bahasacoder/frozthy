import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { saveCompleteCustomerData } from '@/lib/features/customer/customerMultiSlice';

export default function CheckoutCustomerForm() {
    const dispatch = useDispatch<any>();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        age: '',
        gender: '',
        interests: [] as string[],
    });
  
  // Mengambil seluruh objek state yang terintegrasi
    const customerData = useSelector((state: { customerMulti: any }) => state.customerMulti);

  const handleSubmitAllData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Membungkus data yang diperlukan untuk dikirim ke backend API
    const payload = {
      profile_main: customerData.profileMain,
      profile_secondary: customerData.profileSecondary,
      address_main: customerData.addressMain,
      address_secondary: customerData.addressSecondary,
    };

    // Eksekusi sekali jalan ke Thunk
    // dispatch(saveCompleteCustomerData(payload));
     console.log("on submit di klik")
  };

    function handleChange(
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
    ): void {
        const { name, value } = event.target;
        const nextValue = event.target instanceof HTMLSelectElement && event.target.multiple
            ? Array.from(event.target.selectedOptions, (option) => option.value)
            : value;

        setFormData((current) => ({ ...current, [name]: nextValue }));
    }

  return (
    <form onSubmit={handleSubmitAllData}>
              {/* Input fields Anda untuk profil main, secondary, dll ditaruh di sini */}
            <label htmlFor="firstName" className="">
                First Name:
            </label>
            <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="" />

            <label htmlFor="lastName" className="">
                Last Name:
            </label>
            <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="" />

            <label htmlFor="email" className="">
                Email:
            </label>
            <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="" />

            <label htmlFor="address" className="">
                Address:
            </label>
            <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="" />

            <label htmlFor="age" className="">
                Age:
            </label>
            <input
                type="number"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                className="" />

            <label className="">Gender:</label>

            <span style={{ display: "flex" }}>
                <label
                    style={{ width: "20px" }}
                    htmlFor="male"
                    className="">
                    Male
                </label>
                <input
                    type="radio"
                    id="male"
                    name="gender"
                    value="male"
                    checked={formData.gender === "male"}
                    onChange={handleChange}
                    className="" />
            </span>
            <span style={{ display: "flex" }}>
                <label
                    style={{ width: "20px" }}
                    htmlFor="female"
                    className="">
                    Female
                </label>
                <input
                    type="radio"
                    id="female"
                    name="gender"
                    value="female"
                    checked={formData.gender === "female"}
                    onChange={handleChange}
                    className="" />
            </span>

            <label htmlFor="interests" className="">
                Interests:
            </label>
            <select
                id="interests"
                name="interests"
                multiple
                value={formData.interests}
                onChange={handleChange}
                className="">
                <option value="coding">Coding</option>
                <option value="reading">Reading</option>
                <option value="music">Music</option>
            </select>

            <button type="submit" className="p-4 m-2 bg-olive-300">
                Submit
            </button>
            <button type="reset" className="p-4 m-2 bg-lime-300">
                Reset
            </button>
        </form>
    );
};

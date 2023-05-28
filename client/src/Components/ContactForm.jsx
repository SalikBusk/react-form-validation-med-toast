import React, { useState } from 'react'; // Importerer useState fra React-biblioteket.

import useFormValidation from '../Hooks/useFormValidation'; // Importerer useFormValidation hook fra en custom hook-fil.

const ContactForm = () => { // Definerer ContactForm-komponenten.
  const {
    firstName,
    lastName,
    email,
    handleSubmit,
    handleFirstNameChange,
    handleLastNameChange,
    handleEmailChange,
  } = useFormValidation(); // Bruger useFormValidation hook til at hente værdier og funktioner til validering af formularfelterne.

  const [firstNameTouched, setFirstNameTouched] = useState(false); // Opretter en tilstand og en funktion til at opdatere tilstanden for firstNameTouched.
  const [lastNameTouched, setLastNameTouched] = useState(false); // Opretter en tilstand og en funktion til at opdatere tilstanden for lastNameTouched.

  const getFirstNameBorderColor = () => {
    if (firstNameTouched && firstName.length < 2) { // Hvis firstNameTouched er true og længden af firstName er mindre end 2.
      return 'border-red-500'; // Returnerer en CSS-klasse for en rød kant.
    } else if (firstNameTouched && firstName.length >= 2) { // Hvis firstNameTouched er true og længden af firstName er større eller lig med 2.
      return 'border-green-500'; // Returnerer en CSS-klasse for en grøn kant.
    }
    return ''; // Ellers returneres en tom streng.
  };

  const getLastNameBorderColor = () => {
    if (lastNameTouched && lastName.length < 3) { // Hvis lastNameTouched er true og længden af lastName er mindre end 3.
      return 'border-red-500'; // Returnerer en CSS-klasse for en rød kant.
    } else if (lastNameTouched && lastName.length >= 3) { // Hvis lastNameTouched er true og længden af lastName er større eller lig med 3.
      return 'border-green-500'; // Returnerer en CSS-klasse for en grøn kant.
    }
    return ''; // Ellers returneres en tom streng.
  };

   //   Formularelement med handleSubmit som hændelsesbehandler og CSS-klasser.
  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto"> 
    
      <div className="mb-4">
        <label htmlFor="firstName" className="block text-gray-700 font-bold mb-2">
          Fornavn:
        </label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={handleFirstNameChange}
          onBlur={() => setFirstNameTouched(true)} // Når feltet mister fokus, sættes firstNameTouched til true.
          className={`w-full px-4 py-2 border ${getFirstNameBorderColor()} rounded-md focus:outline-none focus:border-blue-500`}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="lastName" className="block text-gray-700 font-bold mb-2">
          Efternavn:
        </label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={handleLastNameChange}
          onBlur={() => setLastNameTouched(true)} // Når feltet mister fokus, sættes lastNameTouched til true.
          className={`w-full px-4 py-2 border ${getLastNameBorderColor()} rounded-md focus:outline-none focus:border-blue-500`}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
          E-mail:
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm; 

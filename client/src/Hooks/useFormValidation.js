import { useState } from 'react';
import { toast } from 'react-hot-toast';

const useFormValidation = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const validateFirstName = () => {
    if (firstName.length < 2) {
      toast.error('Fornavn skal være mindst 2 karakterer');
    }
  };

  const validateLastName = () => {
    if (lastName.length < 3) {
      toast.error('Efternavn skal være mindst 3 karakterer');
    }
  };

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailRegex)) {
      toast.error('Indtast en gyldig e-mailadresse');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    validateFirstName();
    validateLastName();
    validateEmail();

    if (firstName.length >= 2 && lastName.length >= 3 && email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      toast.success('Tak for dine oplysninger');
      setFirstName('');
      setLastName('');
      setEmail('');
    }
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  return {
    firstName,
    lastName,
    email,
    handleSubmit,
    handleFirstNameChange,
    handleLastNameChange,
    handleEmailChange,
  };
};

export default useFormValidation;

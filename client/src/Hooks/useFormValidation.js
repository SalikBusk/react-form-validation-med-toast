import { useState } from 'react';
import { toast } from 'react-hot-toast';

const useFormValidation = () => {
  const [firstName, setFirstName] = useState(''); // State til at gemme værdien af fornavn
  const [lastName, setLastName] = useState(''); // State til at gemme værdien af efternavn
  const [email, setEmail] = useState(''); // State til at gemme værdien af e-mail

  const [fNameValidated, setFNameValidated] = useState(false); // State til at validere fornavn
  const [eNameValidated, setENameValidated] = useState(false); // State til at validere efternavn

  const validateFirstName = () => {
    if (firstName.length >= 2) {
      setFNameValidated(true); // Validér fornavn, hvis det har mindst 2 tegn
    } else {
      setFNameValidated(false); // Markér fornavn som ugyldigt, hvis det har færre end 2 tegn
    }
  };

  const validateLastName = () => {
    if (lastName.length >= 3) {
      setENameValidated(true); // Validér efternavn, hvis det har mindst 3 tegn
    } else {
      setENameValidated(false); // Markér efternavn som ugyldigt, hvis det har færre end 3 tegn
    }
  };

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex til at validere e-mailformatet
    if (!email.match(emailRegex)) {
      toast.error('Indtast en gyldig e-mailadresse'); // Vis en fejl-toast, hvis e-mailen ikke matcher regex'en
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Forhindre standardformularindsendelse

    validateFirstName(); // Validér fornavn
    validateLastName(); // Validér efternavn
    validateEmail(); // Validér e-mail

    if (fNameValidated && eNameValidated && email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      toast.success('Tak for dine oplysninger'); // Vis succes-toast, hvis alle valideringer er bestået
      setFirstName(''); // Nulstil fornavn
      setLastName(''); // Nulstil efternavn
      setEmail(''); // Nulstil e-mail
    } else {
      toast.error('Udfyld venligst inputfelterne korrekt'); // Vis fejl-toast, hvis valideringerne ikke er bestået
    }
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value); // Opdater værdien af fornavn med værdien fra inputfeltet
    if (event.target.value.length === 0) {
      setFNameValidated(false); // Hvis fornavnet er blevet fjernet (længden er 0), markeres det som ugyldigt
    }
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value); // Opdater værdien af efternavn med værdien fra inputfeltet
    if (event.target.value.length === 0) {
      setENameValidated(false); // Hvis efternavnet er blevet fjernet (længden er 0), markeres det som ugyldigt
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value); // Opdater værdien af e-mail med værdien fra inputfeltet
  };

  const getFirstNameBorderColor = () => {
    return fNameValidated && firstName.length >= 2 ? 'border-green-500' : 'border-red-500';
    // Returnerer farveklassen baseret på om fornavnet er gyldigt (validateret) og har mindst 2 tegn
  };

  const getLastNameBorderColor = () => {
    return eNameValidated && lastName.length >= 3 ? 'border-green-500' : 'border-red-500';
    // Returnerer farveklassen baseret på om efternavnet er gyldigt (validateret) og har mindst 3 tegn
  };

  return {
    firstName,
    lastName,
    email,
    handleSubmit,
    handleFirstNameChange,
    handleLastNameChange,
    handleEmailChange,
    getFirstNameBorderColor,
    getLastNameBorderColor,
  };
};

export default useFormValidation;

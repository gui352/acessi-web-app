import { AvaliationLocalModel } from "interfaces/Avaliations/AvalitionLocalInterface";
import { useState } from "react";
import { AvaliationLocalService } from "services/AvaliationLocal/AvaliationLocalService";

export const RegisterCompany = () => {
  const avaliationService = new AvaliationLocalService();
  const [avaliation, setAvaliation] = useState<AvaliationLocalModel>();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setAvaliation((prevAvaliation) => ({
      ...prevAvaliation,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Call the AvaliationLocalService to save the avaliation
    avaliationService.CreateAvaliationLocal(avaliation);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Render the input fields for AvaliationLocalModel here */}
      <button type="submit">Submit</button>
    </form>
  );
};

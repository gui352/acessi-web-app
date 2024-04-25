import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Rating } from "primereact/rating";
import { Tag } from "primereact/tag";
import { AvaliationLocalService } from "../../../services/AvaliationLocal/AvaliationLocalService";

export const RegisterAvaliationLocal = () => {
  const [avaliations, setAvaliations] = useState([]);
  const avaliationLocalService = new AvaliationLocalService();

  useEffect(() => {
    avaliationLocalService
      .GetAllAvaliations()
      .then((response) => setAvaliations(response.data));
  }, []);

  return <></>;
};

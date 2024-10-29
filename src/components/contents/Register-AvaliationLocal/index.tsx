import React, { useState, useEffect, useRef } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Rating } from "primereact/rating";
import { Tag } from "primereact/tag";
import { AvaliationLocalService } from "../../../services/AvaliationLocal/AvaliationLocalService";
import { InputText } from "primereact/inputtext";
import {
  AvaliationLocalModel,
  LocalAvaliationType,
} from "interfaces/Avaliations/AvalitionLocalInterface";
import { Toast } from "primereact/toast";
import { Toolbar } from "primereact/toolbar";
import { Dialog } from "primereact/dialog";
import { classNames } from "primereact/utils";
import { InputTextarea } from "primereact/inputtextarea";
import { RadioButton } from "primereact/radiobutton";
import { Tooltip } from "primereact/tooltip";
import { FileUpload } from "primereact/fileupload";
import { ProgressBar } from "primereact/progressbar";
import { set } from "react-hook-form";

export const RegisterAvaliationLocal = () => {
  let emptyAvaliation: AvaliationLocalModel = {
    idLocalAvaliation: 0,
    name: "",
    imageAvaliationLocal: "",
    typeLocalAvaliation: LocalAvaliationType.Another,
  };

  const avaliationLocalService = new AvaliationLocalService();
  const toast = useRef(null);
  const dt = useRef(null);
  const [products, setProducts] = useState(null);
  const [productDialog, setProductDialog] = useState(false);
  const [deleteProductDialog, setDeleteProductDialog] = useState(false);
  const [deleteProductsDialog, setDeleteProductsDialog] = useState(false);
  const [product, setProduct] = useState(emptyAvaliation);
  const [selectedProducts, setSelectedProducts] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [globalFilter, setGlobalFilter] = useState(null);
  const [imageAvaliation, setImageAvaliation] = useState(null);

  useEffect(() => {
    avaliationLocalService
      .GetAllAvaliations()
      .then((response) => setProducts(response.data));
  }, []);

  const openNew = () => {
    setProduct(emptyAvaliation);
    setSubmitted(false);
    setProductDialog(true);
  };

  const hideDialog = () => {
    setSubmitted(false);
    setProductDialog(false);
    setImageAvaliation("");
  };

  const hideDeleteProductDialog = () => {
    setDeleteProductDialog(false);
  };

  const hideDeleteProductsDialog = () => {
    setDeleteProductsDialog(false);
  };

  const saveProduct = async () => {
    setSubmitted(true);
    let _products = Array.isArray(products) ? [...products] : [];
    let _product = { ...product };

    if (
      product.name.trim() &&
      product.imageAvaliationLocal != undefined &&
      product.imageAvaliationLocal != "" &&
      product.typeLocalAvaliation
    ) {
      if (product.idLocalAvaliation) {
        // Atualizando produto
        await avaliationLocalService.UpdateAvaliationLocal(_product);
        const index = _products.findIndex(
          (p) => p.idLocalAvaliation === product.idLocalAvaliation
        );
        if (index !== -1) {
          _products[index] = _product;
        }
        toast.current.show({
          severity: "success",
          summary: "Sucesso",
          detail: "Avaliação Atualizada",
          life: 3000,
        });
      } else {
        // Criando novo produto
        try {
          const avaliationCriada =
            await avaliationLocalService.CreateAvaliationLocal(_product);

          if (avaliationCriada) {
            _product.idLocalAvaliation = avaliationCriada.idLocalAvaliation;
            _products.push(_product);
          }

          // Atualiza o estado dos produtos após a criação
          setProducts(_products);

          toast.current.show({
            severity: "success",
            summary: "Sucesso",
            detail: "Avaliação criada",
            life: 3000,
          });
        } catch (error) {
          console.error("Erro ao criar avaliação:", error);
          toast.current.show({
            severity: "error",
            summary: "Erro",
            detail: "Falha ao criar avaliação.",
            life: 3000,
          });
        }
      }
    } else {
      toast.current.show({
        severity: "error",
        summary: "Erro inesperado",
        detail: "Por favor, preencha todos os campos.",
        life: 3000,
      });
    }

    setProductDialog(false);
    setProduct(emptyAvaliation);
    setImageAvaliation("");
  };
  const editProduct = (product) => {
    console.log("chamou edit propduct");
    console.log("lista atual de produtos", products);
    console.log("produto a ser editado", product);
    setProduct({ ...product });
    setProductDialog(true);
  };

  const confirmDeleteProduct = (product) => {
    setProduct(product);
    setDeleteProductDialog(true);
  };

  const deleteProduct = () => {
    let _products = products.filter(
      (val) => val.idLocalAvaliation !== product.idLocalAvaliation
    );

    if (product.idLocalAvaliation) {
      let response = avaliationLocalService.DeleteAvaliationLocal(
        product.idLocalAvaliation
      );
    } else {
      console.log("Produto não encontrado");
    }

    setProducts(_products);
    setDeleteProductDialog(false);
    setProduct(emptyAvaliation);

    toast.current.show({
      severity: "success",
      summary: "Sucesso",
      detail: "Produto deletado ",
      life: 3000,
    });
  };

  const confirmDeleteSelected = () => {
    setDeleteProductsDialog(true);
  };

  const deleteSelectedProducts = () => {
    console.log("lista de produtos antes de deletar", selectedProducts);

    let _products = products.filter((val) => !selectedProducts.includes(val));

    console.log("lista de produtos apos deletar", _products);

    setProducts(_products);
    setDeleteProductsDialog(false);
    setSelectedProducts(null);
    toast.current.show({
      severity: "success",
      summary: "Sucesso",
      detail: "Avaliação(s) deletada(s) com sucesso.",
      life: 3000,
    });
  };

  const onCategoryChange = (e) => {
    let _product = { ...product };
    _product.typeLocalAvaliation = e.value as LocalAvaliationType;
    setProduct(_product);
  };

  const onInputChange = (e, name) => {
    const val = (e.target && e.target.value) || "";
    let _product = { ...product };

    _product[`${name}`] = val;

    setProduct(_product);
  };

  const leftToolbarTemplate = () => {
    return (
      <div className="flex flex-wrap gap-2">
        <Button
          label="Adicionar"
          icon="pi pi-plus"
          severity="success"
          onClick={openNew}
        />
        <Button
          label="Delete"
          icon="pi pi-trash"
          severity="danger"
          onClick={confirmDeleteSelected}
          disabled={!selectedProducts || !selectedProducts.length}
        />
      </div>
    );
  };

  const ratingBodyTemplate = (rowData) => {
    return <Rating value={rowData.rating} readOnly cancel={false} />;
  };

  const actionBodyTemplate = (rowData) => {
    return (
      <React.Fragment>
        <Button
          icon="pi pi-pencil"
          rounded
          outlined
          className="mr-2"
          onClick={() => editProduct(rowData)}
        />
        <Button
          icon="pi pi-trash"
          rounded
          outlined
          severity="danger"
          onClick={() => confirmDeleteProduct(rowData)}
        />
      </React.Fragment>
    );
  };

  const header = (
    <div className="flex flex-wrap gap-2 align-items-center justify-content-between">
      <h4 className="m-0">Locais de avaliação</h4>
      <span className="p-input-icon-left">
        <i className="pi pi-search" />
        <InputText
          type="search"
          onInput={(e) => setGlobalFilter((e.target as HTMLInputElement).value)}
          placeholder="Search..."
        />
      </span>
    </div>
  );
  const productDialogFooter = (
    <React.Fragment>
      <Button
        label="Cancelar"
        icon="pi pi-times"
        outlined
        onClick={hideDialog}
      />
      <Button label="Salvar" icon="pi pi-check" onClick={saveProduct} />
    </React.Fragment>
  );
  const deleteProductDialogFooter = (
    <React.Fragment>
      <Button
        label="Não"
        icon="pi pi-times"
        outlined
        onClick={hideDeleteProductDialog}
      />
      <Button
        label="Sim"
        icon="pi pi-check"
        severity="danger"
        onClick={deleteProduct}
      />
    </React.Fragment>
  );
  const deleteProductsDialogFooter = (
    <React.Fragment>
      <Button
        label="Não"
        icon="pi pi-times"
        outlined
        onClick={hideDeleteProductsDialog}
      />
      <Button
        label="Sim"
        icon="pi pi-check"
        severity="danger"
        onClick={deleteSelectedProducts}
      />
    </React.Fragment>
  );

  const handleFileChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImageAvaliation(URL.createObjectURL(event.target.files[0]));
    }

    const file = event.target.files[0];
    const reader = new FileReader();
    let _product = { ...product };

    reader.onload = (progressEvent) => {
      const base64String = progressEvent.target.result as string; // Será uma string base64
      _product.imageAvaliationLocal = base64String;
      setProduct(_product);
    };

    reader.readAsDataURL(file); // Lê o arquivo como DataURL (Base64)
  };

  return (
    <div>
      <Toast ref={toast} />
      <div className="card">
        <Toolbar className="mb-4" left={leftToolbarTemplate}></Toolbar>

        <DataTable
          ref={dt}
          value={products}
          selection={selectedProducts}
          onSelectionChange={(e) => setSelectedProducts(e.value)}
          dataKey="id"
          paginator
          rows={10}
          rowsPerPageOptions={[5, 10, 25]}
          paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
          currentPageReportTemplate="Showing {first} to {last} of {totalRecords} avaliations"
          globalFilter={globalFilter}
          header={header}
        >
          <Column
            field="name"
            header="Name"
            sortable
            style={{ minWidth: "16rem" }}
          ></Column>
          <Column
            field="typeLocalAvaliation"
            header="Tipo Avaliação"
            sortable
            style={{ minWidth: "10rem" }}
          ></Column>
          <Column
            field="rating"
            header="Reviews"
            body={ratingBodyTemplate}
            sortable
            style={{ minWidth: "12rem" }}
          ></Column>
          <Column
            body={actionBodyTemplate}
            exportable={false}
            style={{ minWidth: "12rem" }}
          ></Column>
        </DataTable>
      </div>

      <Dialog
        visible={productDialog}
        style={{ width: "50rem" }}
        breakpoints={{ "960px": "75vw", "641px": "90vw" }}
        header="Novo local de avaliação"
        modal
        className="p-fluid"
        footer={productDialogFooter}
        onHide={hideDialog}
      >
        <div className="field">
          <label htmlFor="name" className="font-bold">
            Nome
          </label>
          <InputText
            id="name"
            value={product.name}
            onChange={(e) => onInputChange(e, "name")}
            required
            autoFocus
            className={classNames({ "p-invalid": submitted && !product.name })}
          />
          {submitted && !product.name && (
            <small className="p-error">Nome é obrigatório.</small>
          )}
        </div>

        <div className="field">
          <label className="mb-3 font-bold">Tipo local</label>
          <div className="formgrid grid">
            <div className="field-radiobutton col-6">
              <RadioButton
                inputId="category1"
                name="typeLocalAvaliation"
                value="Restaurant"
                onChange={onCategoryChange}
                checked={
                  product.typeLocalAvaliation == LocalAvaliationType.Restaurant
                }
              />
              <label htmlFor="category1">Restaurante</label>
            </div>
            <div className="field-radiobutton col-6">
              <RadioButton
                inputId="category2"
                name="typeLocalAvaliation"
                value="Pub"
                onChange={onCategoryChange}
                checked={product.typeLocalAvaliation == LocalAvaliationType.Pub}
              />
              <label htmlFor="category2">Bar</label>
            </div>
            <div className="field-radiobutton col-6">
              <RadioButton
                inputId="category3"
                name="typeLocalAvaliation"
                value="Park"
                onChange={onCategoryChange}
                checked={
                  product.typeLocalAvaliation == LocalAvaliationType.Park
                }
              />
              <label htmlFor="category3">Parque</label>
            </div>
            <div className="field-radiobutton col-6">
              <RadioButton
                inputId="category4"
                name="typeLocalAvaliation"
                value="Public"
                onChange={onCategoryChange}
                checked={
                  product.typeLocalAvaliation == LocalAvaliationType.Public
                }
              />
              <label htmlFor="category4">Publico</label>
            </div>
            <div className="field-radiobutton col-6">
              <RadioButton
                inputId="category5"
                name="typeLocalAvaliation"
                value="Private"
                onChange={onCategoryChange}
                checked={
                  product.typeLocalAvaliation == LocalAvaliationType.Private
                }
              />
              <label htmlFor="category5">Privado</label>
            </div>
            <div className="field-radiobutton col-6">
              <RadioButton
                inputId="category6"
                name="typeLocalAvaliation"
                value="Another"
                onChange={onCategoryChange}
                checked={
                  product.typeLocalAvaliation == LocalAvaliationType.Another
                }
              />
              <label htmlFor="category6">Outro</label>
            </div>
          </div>
        </div>

        <div className="field">
          <Tooltip
            target=".custom-choose-btn"
            content="Choose"
            position="bottom"
          />
          <Tooltip
            target=".custom-upload-btn"
            content="Upload"
            position="bottom"
          />
          <Tooltip
            target=".custom-cancel-btn"
            content="Clear"
            position="bottom"
          />
        </div>
        <div style={{ width: "300px", height: "300px" }}>
          <input type="file" onChange={handleFileChange} className="filetype" />
          <img src={imageAvaliation} />
        </div>
      </Dialog>

      <Dialog
        visible={deleteProductDialog}
        style={{ width: "32rem" }}
        breakpoints={{ "960px": "75vw", "641px": "90vw" }}
        header="Confirmar"
        modal
        footer={deleteProductDialogFooter}
        onHide={hideDeleteProductDialog}
      >
        <div className="confirmation-content">
          <i
            className="pi pi-exclamation-triangle mr-3"
            style={{ fontSize: "2rem" }}
          />
          {product && (
            <span>
              Você tem certeza que deseja deletar o <b>{product.name}</b>?
            </span>
          )}
        </div>
      </Dialog>

      <Dialog
        visible={false}
        style={{ width: "32rem" }}
        breakpoints={{ "960px": "75vw", "641px": "90vw" }}
        header="Confirmar"
        modal
        footer={deleteProductsDialogFooter}
        onHide={hideDeleteProductsDialog}
      >
        <div className="confirmation-content">
          <i
            className="pi pi-exclamation-triangle mr-3"
            style={{ fontSize: "2rem" }}
          />
          {product && (
            <span>
              Você tem certeza que deseja deletar a(s) avaliação(s)
              selecionada(s) ?
            </span>
          )}
        </div>
      </Dialog>
    </div>
  );
};

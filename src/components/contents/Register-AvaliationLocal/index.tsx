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

export const RegisterAvaliationLocal = () => {
  const avaliationLocalService = new AvaliationLocalService();

  let emptyAvaliation: AvaliationLocalModel = {
    idLocalAvaliation: 0,
    name: "",
    imageAvaliationLocal: [],
    typeLocalAvaliation: LocalAvaliationType.Another, // Provide a valid value for typeLocalAvaliation
  };

  const [products, setProducts] = useState(null);
  const [productDialog, setProductDialog] = useState(false);
  const [deleteProductDialog, setDeleteProductDialog] = useState(false);
  const [deleteProductsDialog, setDeleteProductsDialog] = useState(false);
  const [product, setProduct] = useState(emptyAvaliation);
  const [selectedProducts, setSelectedProducts] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [globalFilter, setGlobalFilter] = useState(null);
  const toast = useRef(null);
  const dt = useRef(null);

  useEffect(() => {
    avaliationLocalService
      .GetAllAvaliations()
      .then((response) => setProducts(response.data));
  }, []);

  const formatCurrency = (value) => {
    return value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  const openNew = () => {
    setProduct(emptyAvaliation);
    setSubmitted(false);
    setProductDialog(true);
  };

  const hideDialog = () => {
    setSubmitted(false);
    setProductDialog(false);
  };

  const hideDeleteProductDialog = () => {
    setDeleteProductDialog(false);
  };

  const hideDeleteProductsDialog = () => {
    setDeleteProductsDialog(false);
  };

  const saveProduct = () => {
    setSubmitted(true);
    let _products = Array.isArray(products) ? [...products] : [];
    let _product = { ...product };
    console.log("Lista produtos", _products);
    console.log("produto selecionado", _product);

    if (
      product.name.trim() &&
      // product.imageAvaliationLocal.length > 0 &&
      product.typeLocalAvaliation
    ) {
      if (product.idLocalAvaliation) {
        const index = findIndexById(product.idLocalAvaliation);

        avaliationLocalService.UpdateAvaliationLocal(_product);

        _products[index] = _product;
        toast.current.show({
          severity: "success",
          summary: "Successful",
          detail: "Avaliação Atualizada",
          life: 3000,
        });
      } else {
        _product.idLocalAvaliation = 0;
        _product.imageAvaliationLocal = [];
        avaliationLocalService.CreateAvaliationLocal(_product);

        _products.push(_product);
        toast.current.show({
          severity: "success",
          summary: "Successful",
          detail: "Avaliação criada",
          life: 3000,
        });
      }
    } else {
      toast.current.show({
        severity: "error",
        summary: "Error",
        detail: "Por favor, preencha todos os campos obrigatórios",
        life: 3000,
      });
    }

    // if (product.name.trim()) {

    // if (product.idLocalAvaliation) {
    //   const index = findIndexById(product.idLocalAvaliation);

    //   _products[index] = _product;
    //   toast.current.show({
    //     severity: "success",
    //     summary: "Successful",
    //     detail: "Avaliação Atualizada",
    //     life: 3000,
    //   });
    // } else {
    //   _product.idLocalAvaliation = 0;
    //   _product.imageAvaliationLocal = [];
    //   _products.push(_product);
    //   toast.current.show({
    //     severity: "success",
    //     summary: "Successful",
    //     detail: "Avaliação criada",
    //     life: 3000,
    //   });
    // }

    setProducts(_products);
    setProductDialog(false);
    setProduct(emptyAvaliation);
    // }
  };

  const editProduct = (product) => {
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

    setProducts(_products);
    setDeleteProductDialog(false);
    setProduct(emptyAvaliation);
    toast.current.show({
      severity: "success",
      summary: "Successful",
      detail: "Product Deleted",
      life: 3000,
    });
  };

  const findIndexById = (id) => {
    let index = -1;

    for (let i = 0; i < products.length; i++) {
      if (products[i].id === id) {
        index = i;
        break;
      }
    }

    return index;
  };

  const confirmDeleteSelected = () => {
    setDeleteProductsDialog(true);
  };

  const deleteSelectedProducts = () => {
    let _products = products.filter((val) => !selectedProducts.includes(val));

    setProducts(_products);
    setDeleteProductsDialog(false);
    setSelectedProducts(null);
    toast.current.show({
      severity: "success",
      summary: "Successful",
      detail: "Products Deleted",
      life: 3000,
    });
  };

  const onCategoryChange = (e) => {
    let _product = { ...product };

    _product["typeLocalAvaliation"] = e.value;
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

  const imageBodyTemplate = (rowData) => {
    return (
      <img
        src={`https://primefaces.org/cdn/primereact/images/product/${rowData.image}`}
        alt={rowData.image}
        className="shadow-2 border-round"
        style={{ width: "64px" }}
      />
    );
  };

  const priceBodyTemplate = (rowData) => {
    return formatCurrency(rowData.price);
  };

  const ratingBodyTemplate = (rowData) => {
    return <Rating value={rowData.rating} readOnly cancel={false} />;
  };

  const statusBodyTemplate = (rowData) => {
    return (
      <Tag
        value={rowData.inventoryStatus}
        severity={getSeverity(rowData)}
      ></Tag>
    );
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

  const getSeverity = (product) => {
    switch (product.inventoryStatus) {
      case "INSTOCK":
        return "success";

      case "LOWSTOCK":
        return "warning";

      case "OUTOFSTOCK":
        return "danger";

      default:
        return null;
    }
  };

  const header = (
    <div className="flex flex-wrap gap-2 align-items-center justify-content-between">
      <h4 className="m-0">Manage Products</h4>
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
        label="No"
        icon="pi pi-times"
        outlined
        onClick={hideDeleteProductsDialog}
      />
      <Button
        label="Yes"
        icon="pi pi-check"
        severity="danger"
        onClick={deleteSelectedProducts}
      />
    </React.Fragment>
  );

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
          currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
          globalFilter={globalFilter}
          header={header}
        >
          {/* <Column selectionMode="multiple" exportable={false}></Column> */}
          <Column
            field="name"
            header="Name"
            sortable
            style={{ minWidth: "16rem" }}
          ></Column>
          <Column
            field="image"
            header="Imagem Local"
            body={imageBodyTemplate}
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
        style={{ width: "32rem" }}
        breakpoints={{ "960px": "75vw", "641px": "90vw" }}
        header="Novo local de avaliação"
        modal
        className="p-fluid"
        footer={productDialogFooter}
        onHide={hideDialog}
      >
        {product.imageAvaliationLocal && (
          <img
            // src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`}
            // alt={product.imageAvaliationLocal}
            className="product-image block m-auto pb-3"
          />
        )}
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
                value="Restaurante"
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
                value="Bar"
                onChange={onCategoryChange}
                checked={product.typeLocalAvaliation == LocalAvaliationType.Pub}
              />
              <label htmlFor="category2">Bar</label>
            </div>
            <div className="field-radiobutton col-6">
              <RadioButton
                inputId="category3"
                name="typeLocalAvaliation"
                value="Parque"
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
                value="Publico"
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
                value="Privado"
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
                value="Outro"
                onChange={onCategoryChange}
                checked={
                  product.typeLocalAvaliation == LocalAvaliationType.Another
                }
              />
              <label htmlFor="category6">Outro</label>
            </div>
          </div>
        </div>
      </Dialog>

      <Dialog
        visible={deleteProductDialog}
        style={{ width: "32rem" }}
        breakpoints={{ "960px": "75vw", "641px": "90vw" }}
        header="Confirm"
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
              Você tem certeza que deseja deletas o <b>{product.name}</b>?
            </span>
          )}
        </div>
      </Dialog>

      <Dialog
        visible={deleteProductsDialog}
        style={{ width: "32rem" }}
        breakpoints={{ "960px": "75vw", "641px": "90vw" }}
        header="Confirm"
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
              Você tem certeza que deseja deletar o produto selecionado ?
            </span>
          )}
        </div>
      </Dialog>
    </div>
  );
};

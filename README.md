
# Ecommerce API

Challenge proposed by DNC to create an API that allows users to store, edit, remove and consult the following entities: products, clients, purchase orders, inventory and sales records.

## Database Schema

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)


## Technologies & Dependencies

- Node.js
- Express
- MySQL
- Knex
## API Documentation

## CLIENTS ROUTES

### Returns all clients

```http
  GET localhost:8080/clients
```

### Returns one client

```http
  GET localhost:8080/clients/:id
```

| Parameter   | Type       | Description                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `number` | **Mandatory**. The ID Of the client you are searching. |


### Create a new client

```http
  POST localhost:8080/clients
```

| Parameter   | Type       | Description                                   |
| :---------- | :--------- | :------------------------------------------ |
| `name`      | `string` | **Mandatory**. The clients name.
| `email`      | `string` | **Mandatory**. The clients email. |
| `phone`      | `string` | **Mandatory**. The clients phone. |

### Edit a client

```http
  PUT localhost:8080/clients/:id
```

| Parameter   | Type       | Description                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `number` | **Mandatory**. The ID Of the client you are editing. |
| `name`      | `string` | **Optional**. The clients name.
| `email`      | `string` | **Optional**. The clients email. |
| `phone`      | `string` | **Optional**. The clients phone. |



### Delete a client

```http
  DELETE localhost:8080/clients/:id
```

| Parameter   | Type       | Description                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `number` | **Mandatory**. The ID Of the client you are deleting. |

## PRODUCTS ROUTES

### Returns all products

```http
  GET localhost:8080/products
```

### Returns one product

```http
  GET localhost:8080/products/:id
```

| Parameter   | Type       | Description                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `number` | **Mandatory**. The ID Of the product you are searching. |


### Create a new product

```http
  POST localhost:8080/products
```

| Parameter   | Type       | Description                                   |
| :---------- | :--------- | :------------------------------------------ |
| `name`      | `string` | **Mandatory**. The products name.
| `description`      | `string` | **Mandatory**. The products description. |
| `value`      | `string` | **Mandatory**. The products value. |

### Edit a product

```http
  PUT localhost:8080/products/:id
```

| Parameter   | Type       | Description                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `number` | **Mandatory**. The ID Of the product you are editing. |
| `name`      | `string` | **Optional**. The product name.
| `description`      | `string` | **Optional**. The products description. |
| `value`      | `string` | **Optional**. The products value. |



### Delete a product

```http
  DELETE localhost:8080/products/:id
```

| Parameter   | Type       | Description                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `number` | **Mandatory**. The ID Of the product you are deleting. |


## SALES ROUTES

### Get all sales

```http
  GET localhost:8080/sales
```

### Get one sale

```http
  GET localhost:8080/sales/:id
```

| Parameter   | Type       | Description                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `number` | **Mandatory**. The ID Of the sale you are searching. |


### Create a new sale

```http
  POST localhost:8080/sales
```

| Parameter   | Type       | Description                                   |
| :---------- | :--------- | :------------------------------------------ |
| `name`      | `string` | **Mandatory**. The sales name.
| `date`      | `dateTime` | **Optional**. The sales date (Default is the moment of registry). |
| `client_id`      | `number` | **Mandatory**. The sales client. |

### Edit a sale

```http
  PUT localhost:8080/sales/:id
```

| Parameter   | Type       | Description                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `number` | **Mandatory**. The ID Of the sale you are editing. |
| `name`      | `string` | **Optional**. The sales name.
| `date`      | `dateTime` | **Optional**. The sales date (Default is the moment of registry). |
| `client_id`      | `number` | **Optional**. The sales client. |



### Delete a sale

```http
  DELETE localhost:8080/sales/:id
```

| Parameter   | Type       | Description                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `number` | **Mandatory**. The ID Of the sale you are deleting. |


### Get Sales Summary

```http
  GET localhost:8080/sales/summary
```

## ORDERS ROUTES

### Get all orders

```http
  GET localhost:8080/orders
```

### Get one order

```http
  GET localhost:8080/orders/:id
```

| Parameter   | Type       | Description                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `number` | **Mandatory**. The ID Of the order you are searching. |


### Create a new order

```http
  POST localhost:8080/order
```

| Parameter   | Type       | Description                                   |
| :---------- | :--------- | :------------------------------------------ |
| `sales_id`      | `number` | **Mandatory**. The sales ID that refers to the order.
| `product_id`      | `number` | **Mandatory**. The products ID that refers to the order. |
| `volume_sold`      | `number` | **Mandatory**. The volume sold of the product in the order. |

### Edit a order

```http
  PUT localhost:8080/orders/:id
```

| Parameter   | Type       | Description                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `number` | **Mandatory**. The ID Of the order you are editing. |
| `sales_id`      | `number` | **Optional**. The sales ID that refers to the order.
| `product_id`      | `number` | **Optional**. The products ID that refers to the order. |
| `volume_sold`      | `number` | **Optional**. The volume sold of the product in the order. |

### Delete a order

```http
  DELETE localhost:8080/orders/:id
```

| Parameter   | Type       | Description                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `number` | **Mandatory**. The ID Of the order you are deleting. |

### Get all orders from a product ID

```http
  GET localhost:8080/orders/product/:id
```

| Parameter   | Type       | Description                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `number` | **Mandatory**. The ID Of the product you are searching. |


### Get all orders from a sales ID

```http
  GET localhost:8080/orders/sale/:id
```

| Parameter   | Type       | Description                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `number` | **Mandatory**. The ID Of the sale you are searching. |

### Get summary from a specific order

```http
  GET localhost:8080/orders/summary/:id
```

| Parameter   | Type       | Description                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `number` | **Mandatory**. The ID Of the order you are searching. |


### Get summary from all orders

```http
  GET localhost:8080/orders/summaries
```

## INVENTORY ROUTES

### Get all inventories items

```http
  GET localhost:8080/inventory
```

### Get one inventory item

```http
  GET localhost:8080/inventory/:id
```

| Parameter   | Type       | Description                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `number` | **Mandatory**. The ID Of the inventory you are searching. |


### Create a new inventory item

```http
  POST localhost:8080/inventory
```

| Parameter   | Type       | Description                                   |
| :---------- | :--------- | :------------------------------------------ |
| `product_id`      | `number` | **Mandatory**. The inventory product ID. (Same ref. Product Table)
| `volume`      | `number` | **Mandatory**. The inventory's product volume. |

### Edit an inventory item

```http
  PUT localhost:8080/inventory/:id
```

| Parameter   | Type       | Description                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `number` | **Mandatory**. The ID Of the inventory you are editing. |
| `volume`      | `number` | **Optional**. The inventory's product volume. |



### Delete an inventory item

```http
  DELETE localhost:8080/inventory/:id
```

| Parameter   | Type       | Description                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `number` | **Mandatory**. The ID Of the inventory you are deleting. |

### Get an inventory item by product ID

```http
  GET localhost:8080/inventory/product/:id
```

| Parameter   | Type       | Description                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `number` | **Mandatory**. The ID Of the product you are searching. |

## Setup

After cloning or downloading the project, use the commands below in the terminal.

```bash
  npm install my-project
  cd my-project
  npm run dev
```
    
## Author

- [@kunzeleric](https://www.github.com/kunzeleric)


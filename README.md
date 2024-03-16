# Amazon Clone

Full Stack Amazon Clone along with Admin Panel

### Amazon Clone Features:

- **Email & Password Authentication:** Users can sign up and log in securely with their email and password.
- **Persisting Auth State:** Ensures that users remain logged in across sessions for a seamless experience.
- **Searching Products:** Enables users to easily find products by searching for keywords.
- **Filtering Products (Based on Category):** Allows users to narrow down their product search based on categories.
- **Product Details:** Provides detailed information about each product, including description, price, and images.
- **Rating:** Allows users to rate and review products based on their experiences.
- **Getting Deal of the Day:** Highlights a special deal of the day for users to take advantage of.
- **Cart:** Allows users to add products to their cart for later purchase.
- **Checking out with Google/Apple Pay:** Provides convenient payment options for users through Google Pay or Apple Pay.
- **Viewing My Orders:** Allows users to see a list of their past orders.
- **Viewing Order Details & Status:** Provides detailed information about each order, including current status.
- **Sign Out:** Enables users to securely log out of their accounts.
- **Admin Panel:**
  - **Viewing All Products:** Gives administrators access to a list of all available products.
  - **Adding Products:** Allows administrators to add new products to the store.
  - **Deleting Products:** Enables administrators to remove products from the inventory.
  - **Viewing Orders:** Provides administrators with a list of all orders placed by users.
  - **Changing Order Status:** Allows administrators to update the status of orders (e.g., processing, shipped, delivered).
  - **Viewing Total Earnings:** Displays the total earnings generated from all orders.
  - **Viewing Category Based Earnings:** Provides insights into earnings generated from each product category.

## Adding dependencies

- Before running, create a file named .env in server folder and add the following variables

```
  MONGO_DB_URI=
  JWT_SECRET=
```

- Also change the String uri to your server ip and port in following file `lib/constants/global_variables.dart`

## Running Locally

Cloning the repo

```
  git clone https://github.com/AakarshanSingh/amazon-clone.git
```

Changing directory

```
  cd amazon-clone
```

Starting up server

```bash
  cd server
  npm install
  npm start
```

Client Side

```bash
  flutter pub get
  flutter run
```

## Tech Used

**Server**: Node.js, Express, Mongoose, MongoDB, Cloudinary

**Client**: Flutter, Provider

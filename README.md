# Amazon Clone

Full Stack Amazon Clone along with Admin Panel

## Features

- Email & Password Authentication
- Persisting Auth State
- Searching Products
- Filtering Products (Based on Category)
- Product Details
- Rating
- Getting Deal of the Day
- Cart
- Checking out with Google/Apple Pay
- Viewing My Orders
- Viewing Order Details & Status
- Sign Out
- Admin Panel
  - Viewing All Products
  - Adding Products
  - Deleting Products
  - Viewing Orders
  - Changing Order Status
  - Viewing Total Earnings
  - Viewing Category Based Earnings

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

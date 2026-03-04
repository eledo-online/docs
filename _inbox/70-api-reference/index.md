# REST API Overview

### Authentication

Currently, we are using **HTTP Header Authentication** with an **API Key**.

---

### Create File

You can create a file within the service to store transaction data for later use.

- **HTTP Method:** `POST`  
- **Endpoint:** `https://eledo.online/api/RESTv1/CreateFile`

---

### Download

Download a PDF document from a previously stored file.

- **HTTP Method:** `GET`  
- **Endpoint:** `https://eledo.online/api/RESTv1/Download`

---

### Generate

Main API resource to generate a PDF from a Template and input File.

- **HTTP Method:** `POST`  
- **Endpoint:** `https://eledo.online/api/RESTv1/Generate`

---

### List

Provides a list of Templates.

- **HTTP Method:** `GET`  
- **Endpoint:** `https://eledo.online/api/RESTv1/List`

---

### Profile

Returns the user's profile.

- **HTTP Method:** `GET`  
- **Endpoint:** `https://eledo.online/api/RESTv1/Profile`

---

### Schema

You can retrieve a Template's JSON Schema to construct a valid File structure.

- **HTTP Method:** `GET`  
- **Endpoint:** `https://eledo.online/api/RESTv1/Schema`

# Download

Download a PDF document from a previously stored file.  
**Note:** This action removes a temporary file if applicable.

- **HTTP Method:** `GET`  
- **Endpoint:** `https://eledo.online/api/RESTv1/Download/{file_id}`

---

### Path Parameters

| Name      | Type   | Required | Description                  |
|-----------|--------|----------|------------------------------|
| `file_id` | String | Yes      | Unique identifier of the file |

---

### Response Headers

| Header              | Value                                   |
|---------------------|-----------------------------------------|
| `Content-Type`       | `application/pdf`                       |
| `Content-Disposition`| `attachment; filename="file_name"`     |

---

### Response Body

Binary PDF stream.

---

### Error Response Headers

| Header        | Value              |
|---------------|--------------------|
| `Content-Type` | `application/json` |

---

### Error Response Body Parameters

| Name     | Type   | Description                                 |
|----------|--------|---------------------------------------------|
| `errors` | Array  | List of errors that occurred during the request |

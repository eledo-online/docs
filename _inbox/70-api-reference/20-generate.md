# Generate

Main API resource to generate a PDF from a Template and input File.

- **HTTP Method:** `POST`  
- **Endpoint:** `https://eledo.online/api/RESTv1/Generate`

---

### Request Body Parameters

| Name             | Type     | Required | Description                                |
|------------------|----------|----------|--------------------------------------------|
| `templateId`      | String   | Yes      | Unique identifier of the Template          |
| `templateVersion` | Integer  | No       | Template version                           |
| `file`            | Object   | No       | File to be processed                        |

---

### Response Headers

| Header               | Value                                   |
|----------------------|-----------------------------------------|
| `Content-Type`        | `application/pdf`                       |
| `Content-Disposition` | `attachment; filename="file_name"`     |

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

| Name     | Type   | Description                                  |
|----------|--------|----------------------------------------------|
| `errors` | Array  | List of errors that occurred during the request |

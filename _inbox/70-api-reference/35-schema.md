# Schema

You can retrieve a Template's JSON Schema for valid File structure composition.

- **HTTP Method:** `GET`  
- **Endpoint:** `https://eledo.online/api/RESTv1/Schema/{template_id}/{template_version}`

---

### Path Parameters

| Name             | Type    | Required | Description                        |
|------------------|---------|----------|------------------------------------|
| `template_id`    | String  | Yes      | Unique identifier of the Template  |
| `template_version` | Integer | No     | Template version                   |

---

### Query String Parameters

| Name         | Type   | Required | Description                                      |
|--------------|--------|----------|--------------------------------------------------|
| `schemaType` | String | No       | Select schema type. Available: `"zapier"`        |

---

### Response Body Parameters

| Name     | Type                  | Description          |
|----------|-----------------------|----------------------|
| `schema` | Array of Schema items | List of Schema items |

---

### Schema Item Properties

| Name      | Type                   | Description                        |
|-----------|------------------------|------------------------------------|
| `key`     | String                 | Unique identifier of the item      |
| `type`    | String                 | Item type: `string`, `number`      |
| `children`| Array of Schema items | List of child Schema items         |
| `list`    | Boolean                | `true` if the item is a list       |

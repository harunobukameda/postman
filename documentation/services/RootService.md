# RootService

A list of all methods in the `RootService` service. Click on the method name to view detailed information about that method.

| Methods                   | Description |
| :------------------------ | :---------- |
| [newRequest](#newrequest) |             |

## newRequest

- HTTP Method: `POST`
- Endpoint: `/`

**Parameters**

| Name   | Type                                                | Required | Description       |
| :----- | :-------------------------------------------------- | :------- | :---------------- |
| body   | [NewRequestRequest](../models/NewRequestRequest.md) | ✅       | The request body. |
| accept | string                                              | ✅       |                   |
| userid | string                                              | ❌       |                   |
| time   | string                                              | ❌       |                   |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { Fromspec, NewRequestRequest } from 'fromspec';

(async () => {
  const fromspec = new Fromspec({});

  const newRequestRequest: NewRequestRequest = {
    userid: 'kameda',
  };

  const data = await fromspec.root.newRequest(newRequestRequest, {
    userid: 'string',
    time: '1484',
    accept: 'application/json',
  });

  console.log(data);
})();
```

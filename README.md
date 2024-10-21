# archive notice

The OpenAPI specifications of Trello are not accurate enough to have a reliable client based upon them. As a result, this repository is archived.

# trello-client
Simple client for Trello generated from the Trello openapi specification using openapi-ts.

# Usage
1. Add the following dependency to `package.json`.

```json
{
  "dependencies": {
    "@gewis/trello-client": "github:GEWIS/trello-client"
  }
}
```

2. Import the desired service and call the desired endpoint, e.g.

```typescript
import { DefaultService } from '@gewis/trello-client';

DefaultService.getActionsId(...);
```


import { test, expect } from "../fixtures/05. test-options";

import { User, userSchema } from "../fixtures/api/schemas";
test("Custom API Request Test", async ({ apiRequest }) => {
const { status, body } = await apiRequest<User>({
        method: "POST",
        url: "users/login", 
        baseUrl: "https://conduit-api.bondaracademy.com/api/" , 
        body: { user: { email: "test123@abv.bg",  password: 
       "112233Ivo" } },
});

console.log(body);

expect(status).toBe(200);
expect(body.user.email).toBe("test123@abv.bg");

expect(userSchema.parse(body)).toBeTruthy();
});

    
 
  
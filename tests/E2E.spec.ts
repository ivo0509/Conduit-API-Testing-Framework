import { ArtichleSchema, User, userSchema } from "../fixtures/api/schemas";

import { test, expect } from "../fixtures/05. test-options";
import { Article } from "../fixtures/api/schemas";

import testData from "../test-data/06. test-data.json";

test.describe('E2E', () => {
    let token: string;
    let slug: string;
    const baseUrl = "https://conduit-api.bondaracademy.com/api/";
    test.beforeAll(async ({ apiRequest }) => {
        const { status, body } = await apiRequest<User>({
            method: "POST",
            url: "users/login", 
            baseUrl: baseUrl,

            body: { user: { email: "test123@abv.bg", password: "112233Ivo" } }
        });
        token = body.user.token;
    });
    test('E2E Article CRUD ',{tag: '@E2E'}, async ({ apiRequest }) => {

        await test.step('Create Article', async () => {
            const { status, body } = await apiRequest<Article>({
             method:'POST',
             url: 'articles', 
             baseUrl: baseUrl, 
             body: testData.create,
             headers: token,
            });

            expect(status).toBe(201);
            expect(ArtichleSchema.parse(body)).toBeTruthy();
            expect(body.article.title).toBe(testData.create.article.title);
            slug = body.article.slug;
        });
        await test.step('Update Article', async () => {
            const { status, body } = await apiRequest<Article>({
                method:'PUT',
                url: `articles/${slug}`, 
                baseUrl: baseUrl, 
                body: testData.update, 
                headers: token, 
            });
            expect(status).toBe(200);
            expect(ArtichleSchema.parse(body)).toBeTruthy();
            expect(body.article.title).toBe(testData.update.article.title);
            slug = body.article.slug;
        });
        await test.step('Delete Article', async () => {
            const { status, body } = await apiRequest<null>({
                method: 'DELETE',
                url: `articles/${slug}`,
                baseUrl: baseUrl,
                headers: token,
            });
            expect(status).toBe(204);
        });
        await test.step('Verify Deleted Article', async () => {
            const { status, body } = await apiRequest<Article>({
                method: 'GET',
                url: `articles/${slug}`,
                baseUrl: baseUrl,
                headers: token,
            });
            expect(status).toBe(404);
        });
    });

    test.afterAll(async ({ apiRequest }) => {
        await apiRequest<null>({
            method: 'DELETE',
            url: `articles/${slug}`,
            baseUrl: baseUrl,
            headers: token,
        });
    });
}); 
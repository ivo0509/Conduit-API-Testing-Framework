import { test as base, mergeTests, request } from "@playwright/test";
import { test as apiRequestFixture } from "./api/04. api-request-fixture";

const test = mergeTests(apiRequestFixture);

const expect = base.expect;
export { test, expect, request };

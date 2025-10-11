import { describe, it } from "node:test";
import assert from "node:assert";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { transpileModule } from "typescript";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const sourcePath = join(__dirname, "../src/lib/session.ts");
const source = readFileSync(sourcePath, "utf8");

const compiled = transpileModule(source, {
  compilerOptions: {
    module: 1, // CommonJS
    target: 99, // ES2020
    moduleResolution: 2,
  },
});

const moduleShim = { exports: {} };
const wrapper = new Function("exports", "module", "require", "__dirname", "__filename", compiled.outputText);
wrapper(moduleShim.exports, moduleShim, () => ({}), __dirname, sourcePath);

const { deriveNameFromEmail, parseSession, serializeSession } = moduleShim.exports;

describe("session helpers", () => {
  it("serializes and parses a user", () => {
    const encoded = serializeSession({ email: "demo@orgatlas.app", name: "Demo User" });
    const parsed = parseSession(encoded);
    assert.deepStrictEqual(parsed, { email: "demo@orgatlas.app", name: "Demo User" });
  });

  it("returns null for invalid payload", () => {
    const parsed = parseSession("invalid");
    assert.equal(parsed, null);
  });

  it("derives names from email handles", () => {
    assert.equal(deriveNameFromEmail("first.last@example.com"), "First Last");
    assert.equal(deriveNameFromEmail("ops@example.com"), "Ops");
  });
});

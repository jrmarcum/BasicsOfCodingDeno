import { assertEquals } from "jsr:@std/assert";

function intMin(a: number, b: number): number {
    return a < b ? a : b;
}

Deno.test("IntMinBasic", () => {
    assertEquals(intMin(2, -2), -2);
});

interface TestCase {
    a: number;
    b: number;
    want: number;
}

Deno.test("IntMinTableDriven", async (t) => {
    const tests: TestCase[] = [
        { a: 0, b: 1, want: 0 },
        { a: 1, b: 0, want: 0 },
        { a: 2, b: -2, want: -2 },
        { a: 0, b: -1, want: -1 },
        { a: -1, b: 0, want: -1 },
    ];

    for (const tt of tests) {
        await t.step(`${tt.a},${tt.b}`, () => {
            assertEquals(intMin(tt.a, tt.b), tt.want);
        });
    }
});

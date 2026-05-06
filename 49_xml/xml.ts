import xml2js from "npm:xml2js";

interface Plant {
    id: number;
    name: string;
    origin: string[];
}

function buildPlantXml(plant: Plant, indent: string = " ", innerIndent: string = "  "): string {
    const origins: string = plant.origin.map((o: string): string => `${indent}${innerIndent}<origin>${o}</origin>`).join("\n");
    return `${indent}<plant id="${plant.id}">\n${indent}${innerIndent}<name>${plant.name}</name>\n${origins}\n${indent}</plant>`;
}

const coffee: Plant = { id: 27, name: "Coffee", origin: ["Ethiopia", "Brazil"] };
const tomato: Plant = { id: 81, name: "Tomato", origin: ["Mexico", "California"] };

const coffeeXml: string = buildPlantXml(coffee);
console.log(coffeeXml);

const xmlHeader: string = '<?xml version="1.0" encoding="UTF-8"?>\n';
console.log(xmlHeader + coffeeXml);

xml2js.parseString(coffeeXml, { explicitArray: true, mergeAttrs: false }, (err: Error | null, result: any) => {
    if (err) throw err;
    const pl = result.plant;
    const id: number = parseInt(pl.$.id);
    const name: string = pl.name[0];
    const origins: string[] = pl.origin;
    console.log(`Plant id=${id}, name=${name}, origin=[${origins.join(" ")}]`);
});

const nestingXml: string = ` <nesting>\n   <parent>\n     <child>\n${buildPlantXml(coffee, "       ", "  ")}\n${buildPlantXml(tomato, "       ", "  ")}\n     </child>\n   </parent>\n </nesting>`;
console.log(nestingXml);

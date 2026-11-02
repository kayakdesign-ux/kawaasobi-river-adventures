import { describe, expect, it } from "vitest";
import { BUSINESS, businessStructuredData } from "./business";

describe("confirmed business information", () => {
  it("publishes the starting price as 5,500 JPY, not a fixed tour price", () => {
    const business = businessStructuredData["@graph"].find((entry) => "makesOffer" in entry);
    expect(BUSINESS.minimumPrice).toBe(5500);
    expect(business?.makesOffer?.priceSpecification).toEqual({
      "@type": "PriceSpecification", minPrice: 5500, priceCurrency: "JPY",
    });
  });

  it("uses the confirmed meeting address", () => {
    expect(BUSINESS.address).toBe("高知県長岡郡大豊町西土居１番地");
    const business = businessStructuredData["@graph"].find((entry) => "address" in entry);
    expect(business?.address?.streetAddress).toBe("西土居１番地");
  });
});
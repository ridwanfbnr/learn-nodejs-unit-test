
import { getProductById, getAllProducts } from "../src/database.js";
import { ProductService } from "../src/product-service.js";

jest.mock("../src/database.js");

test("mock modules getProductById", () => {
    getProductById.mockImplementation((id) => {
        return {
            id: id,
            name: "Product Mock"
        };
    });

    const product = ProductService.findById(1);

    expect(product).toEqual({
        id: 1,
        name: "Product Mock"
    });
});

test("mock modules getAllProducts", () => {
    const product = [
        {
            id: 1,
            name: "Product Mock",
        },
        {
            id: 2,
            name: "Product Mock",
        },
    ];

    getAllProducts.mockImplementation(() => {
        return product;
    });

    expect(ProductService.findAll()).toEqual(product);
});
